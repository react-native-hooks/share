/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Share } from 'react-native';

export default () => {
  const [shared, updateShared] = useState(false);
  const [activity, updateActivity] = useState(null);
  const [loading, updateLoading] = useState(false);
  const [error, updateError] = useState();

  async function onShare() {
    try {
      updateLoading(true);
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          updateActivity(result.activityType);
        }
        updateShared(true);
      } else if (result.action === Share.dismissedAction) {
        updateActivity(null);
        updateShared(false);
      }
    } catch (err) {
      updateError(err);
    } finally {
      updateLoading(false);
    }
  }

  return [onShare, shared, activity, loading, error];
};

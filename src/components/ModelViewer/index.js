/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Fragment, useEffect, useState } from 'react';

import SketchFabEmbed from './SketchFabEmbed';
import ImageViewer from './ImageViewer';

const ModelViewer = ({ model }) => {
  const [experienceType, setExperienceType] = useState(null);
  useEffect(() => {
    fetch('/network-memory-considerate-model')
      .then(response => response.json())
      .then(result => {
        setExperienceType(result.experienceType);
      });
  }, []);

  if (!experienceType) return <Fragment>Loading...</Fragment>;
  console.log('[ModelViewer] experienceType => ', experienceType);

  return (
    <Fragment>
      { experienceType === 'heavy' && (
        <SketchFabEmbed model={model} />
      ) }
      { experienceType === 'light' && (
        <ImageViewer model={model} />
      ) }
    </Fragment>
  );
};

export default ModelViewer;

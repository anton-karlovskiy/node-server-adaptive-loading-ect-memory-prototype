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

import React from 'react';

const ImageViewer = ({ model }) => {
  return (
    <img src={`https://media.sketchfab.com/urls/${model}/dist/thumbnails/27a441be16a14368bea782ae2b1679f5/756e16cc8b1640cb8058f8252edbf51b.jpeg`} width='100%' alt='red car model' />
  )
};

export default ImageViewer;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

import {action} from '@storybook/addon-actions';
import Camera from '../src/Icon/Camera';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tag} from '../src/TagList';

storiesOf('Tag', module)
  .add(
    'Default',
    () => render()
  )
  .add(
    'closable: true',
    () => render({closable: true})
  )
  .add(
    'avatar',
    () => render({avatar: 'https://a5.behance.net/8adfcc7bd72ed18f2087e4eb472eb174c865716d/img/profile/no-image-138.png?cb=264615658'})
  )
  .add(
    'avatar, closable: true',
    () => render({avatar: 'https://a5.behance.net/8adfcc7bd72ed18f2087e4eb472eb174c865716d/img/profile/no-image-138.png?cb=264615658', closable: true})
  )
  .add(
    'icon',
    () => render({icon: <Camera />})
  )
  .add(
    'icon, closable: true',
    () => render({icon: <Camera />, closable: true})
  )
  .add(
    'invalid: true',
    () => render({invalid: true, closable: true})
  )
  .add(
    'avatar, invalid: true',
    () => render({avatar: 'https://a5.behance.net/8adfcc7bd72ed18f2087e4eb472eb174c865716d/img/profile/no-image-138.png?cb=264615658', invalid: true, closable: true})
  )
  .add(
    'selected',
    () => <Tag selected>Check aria-selected</Tag>
  );

function render(props = {}, children = 'Cool Tag') {
  return (
    <div>
      <Tag
        value="testValue"
        onClose={action('close')}
        {...props}>
        {props.children || children}
      </Tag>
      <Tag
        value="testValue"
        onClose={action('close')}
        {...props}
        disabled>
        {props.children || children}
      </Tag>
    </div>
  );
}
import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../03/Input';

storiesOf('Input', module)
.add('기본 설정', () => <Input name="name" />)
.add('label 예제', () => <Input name="name" label="이름" />);

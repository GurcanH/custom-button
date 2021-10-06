import React from 'react';
import {storiesOf} from '@storybook/react';
import CustomButton from '../../src/index';
import CustomInput from '../../src/customInput';

storiesOf("Custom Button", module).addWithJSX("simple", ()=> <CustomButton />)
storiesOf("Custom Input", module).addWithJSX("hey", ()=> <CustomInput />)
/// <reference path="../typings/tsd.d.ts" />
import * as React from 'react'
import { render } from 'react-dom'
import Hello from './hello'

render(<Hello name="world" />, document.getElementById('app'));

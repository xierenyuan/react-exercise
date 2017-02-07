import  './menu.scss';
import React, {Component} from 'react';
import Nav from './nav/index.jsx';

/**
 *
 * 菜单组件
 * @export
 * @class Menu
 * @extends {Component}
 */
export default class Menu extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Nav></Nav>
                <div className="content"></div>
            </div>
        )
    }
}
import './menu.scss';
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
        this.state = this.initialState();
    }

    initialState(){
        const menuData = [
            {
                title: '工程师研发部门',
                count: 120,
                value: false,
                id: 1,
                child: [
                    {
                        title: 'Mac 开发工程师',
                        count: 9,
                        value: false,
                        isParent: 1
                    }, {
                        title: 'IosApp 测试开发工程师',
                        count: 17,
                        value: false,
                        isParent: 1
                    }, {
                        title: 'Android 远程控制工程师 ',
                        count: 61,
                        value: false,
                        isParent: 1
                    }, {
                        title: 'Web 前端工程师',
                        count: 31,
                        value: false,
                        isParent: 1
                    }, {
                        title: 'Android 多媒体软件开发工程师',
                        count: 2,
                        value: false,
                        isParent: 1
                    }
                ]
            }, {
                title: '产品设计部门',
                count: 136,
                value: false,
                id: 2,
                child: [
                    {
                        title: '网页设计师',
                        count: 47,
                        value: false,
                        isParent: 2
                    }, {
                        title: 'ID/工业设计师',
                        count: 39,
                        value: false,
                        isParent: 2
                    }, {
                        title: '视觉GUI界面设计师 ',
                        count: 42,
                        value: false,
                        isParent: 2
                    }, {
                        title: '平面设计师',
                        count: 8,
                        value: false,
                        isParent: 2
                    }
                ]
            }
        ];
        return {
            menus: menuData
        }
    }

    render() {
        return (
            <div className="container">
                <Nav menus={this.state.menus}></Nav>
                <div className="content"></div>
            </div>
        )
    }
}
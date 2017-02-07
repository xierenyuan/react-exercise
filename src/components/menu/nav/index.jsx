import React, {Component, createClass} from 'react';
import classNames from 'classnames';
import Checkbox from 'rc-checkbox';
import {fill, findIndex, extend} from 'lodash';
/**
 *
 * MenuGroup
 * @class MenuGroup
 * @extends {Component}
 */
class MenuGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        const className = {
            ['nav--menu']: this.props.isParent
        };
        return (
            <ul className={classNames(className)}>
                {this.props.children}
            </ul>
        )
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        const prex = 'nav--menu-item';
        const className = {
            [`${prex}`]: true,
            [`${prex}-child`]: this.props.isChild
        };
        let title = props.title;
        let count = props.count;
        let complete = props.complete;
        return (
            <li>
                <a className={classNames(className)}>
                    <div className="nav--menu-item__content">
                        <label>
                            <Checkbox onChange={props.onClick} checked={!!complete}/> {title}
                        </label>
                    </div>
                    <span className="nav--menu-item__count">{count}</span>
                </a>
                {this.props.children}
            </li>
        )
    }

}

/**
 *
 * nav
 * @export
 * @class Nav
 * @extends {Component}
 */
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
    }

    initialState() {
        return {menu: this.props.menus}
    }

    onHander(row) {
        let menus = this.state.menu;
        let index = findIndex(menus, item => {
            return item.title === row.title;
        });

        row.value = !row.value;
        let nMenus = fill(menus, row, index, index + 1);

        this.setState({menu: nMenus});

    }

    onParentHander(item) {
        let menus = this.state.menu;

        menus.map(row => {
            if (row.id === item.id) {
                row.value = !item.value;
                row
                    .child
                    .map(childRow => {
                        childRow.value = row.value;
                    });
            }
        });

        this.setState({menu: menus});
    }

    render() {
        const props = this.props;
        const menus = this.state.menu;
        const childs = menus.map((row, index) => {
            return (
                <Item
                    key={index}
                    title={row.title}
                    complete={row.value}
                    count={row.count}
                    onClick={this
                    .onParentHander
                    .bind(this, row)}>
                    {row
                        .child
                        .map((rowChild, indexChild) => {
                            return <MenuGroup key={indexChild}>
                                <Item
                                    isChild="true"
                                    title={rowChild.title}
                                    complete={rowChild.value}
                                    onClick={this
                                    .onHander
                                    .bind(this, rowChild)}
                                    count={rowChild.count}></Item>
                            </MenuGroup>
                        })
}
                </Item>
            )
        });

        return (
            <div className="nav--content">
                <div className="nav--tool">
                    <h3>招聘职位</h3>
                    <button
                        onClick={this
                        .onReset
                        .bind(this)}>清空</button>
                </div>
                <MenuGroup isParent="true">
                    {childs}
                </MenuGroup>
            </div>
        )
    }

    onReset() {
        let menus = this.state.menu;
        let nM = menus.map(item => {
            item.child = item
                .child
                .map(row => {
                    return extend(row, {value: false});
                });
            return extend(item, {value: false});
        });

        this.setState({menu: nM});
    }

};

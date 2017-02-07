import React, {Component} from 'react';
import classNames from 'classnames';

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

/**
 *
 * item
 * @class Item
 * @extends {Component}
 */
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

        return (
            <li>
                <a className={classNames(className)}>
                    <div className="nav--menu-item__content">
                        <input type="checkbox"/> {title}
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
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav--content">
                <div className="nav--tool">
                    <h3>招聘职位</h3>
                    <button>清空</button>
                </div>
                <MenuGroup isParent="true">
                    <Item title="工程师研发部门" count="120">
                        <MenuGroup>
                            <Item isChild="true" title="Mac 开发工程师" count="9"></Item>
                            <Item isChild="true" title="Ios App 测试开发工程师" count="17"></Item>
                        </MenuGroup>
                    </Item>
                    <Item title="产品设计部门" count="136"></Item>
                </MenuGroup>
            </div>
        )
    }
};

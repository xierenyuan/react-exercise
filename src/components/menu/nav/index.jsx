import React, {Component, createClass} from 'react';
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

const Item = createClass({
    getInitialState() {
        return {
            complete: (!!this.props.complete) || false
        };
    },

    handleChange(event) {
        this.setState({complete: event.target.checked});
        const onClick = this.props.onClick;
        if (onClick) {
            onClick(event);
        }
    },

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
                        <input
                            type="checkbox"
                            checked={this.state.complete}
                            rel="complete"
                            onChange={this.handleChange}/> {title}
                    </div>
                    <span className="nav--menu-item__count">{count}</span>
                </a>
                {this.props.children}
            </li>
        )
    }
});

/**
 *
 * item
 * @class Item
 * @extends {Component}
 */
// class Item extends Component {     constructor(props) {         super(props);
//         this.handleChange = this             .handleChange .bind(this); } }

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
    }

    onHander(row) {
        console.log('child', row);

    }

    onParentHander(item) {
        console.log(item);
        item
            .child
            .map(row => {
                row.value = !item.value;
            });
          //  this.setState({});
    }

    render() {
        const props = this.props;
        const menus = props.menus;
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
                    <button>清空</button>
                </div>
                <MenuGroup isParent="true">
                    {childs}
                </MenuGroup>
            </div>
        )
    }

};

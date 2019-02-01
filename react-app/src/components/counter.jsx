import React from 'react';

class Counter extends React.Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <div>
                <h4>Counter #{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {/* <ul>
                    {this.state.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul> */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;

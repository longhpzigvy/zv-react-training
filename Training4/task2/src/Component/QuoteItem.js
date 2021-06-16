import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <p>{props.name}</p>
                </blockquote>
            </figure>
        </li>
    );
};

export default QuoteItem;

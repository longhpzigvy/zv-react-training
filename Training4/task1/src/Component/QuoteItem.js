import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
                <figcaption>{props.text}</figcaption>
                <figcaption>{props.punchline}</figcaption>
            </figure>
        </li>
    );
};

export default QuoteItem;

import styles from "./Item.module.css";

const Item = ({foodItem, handleBuyButtonClicked}) => {
    const handleBuyButtonClicked = (event) => {
        console.log(event);
        console.log(`${foodItem} being bought`); // Log the food item being bought
    };

    return ( 
        <li className={`${styles['kg-item']} list-group-item`}>
            <span className={styles['kg-span']}>{foodItem}</span>
            <button 
                className={`${styles.button} btn btn-info`}
                onClick={handleBuyButtonClicked}
            >
                Buy
            </button>
        </li>
    );

};

export default Item;
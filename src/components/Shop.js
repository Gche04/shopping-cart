

function ShopPage(props) {
    const {
        addStickerToCartByIdx, removeStickerFromCart, stickersInshop, cart
    } = props;

    const ids = cart.map(function(obj){
        return obj.id;
    });

    const buttonAddOrRemoveFromCart = (idx, stickerId) => {
        if (ids.includes(stickerId)) {
            return <button id={ids.indexOf(stickerId)} onClick={removeStickerFromCart}> remove from cart </button>
        }else{
            return <button id={idx} onClick={addStickerToCartByIdx}> add to cart </button>
        }
    }

    return (
        <div className="Shop-page">
            {stickersInshop.map((sticker, idx) => (
                <div key={sticker.name} className="sticker">
                    <img
                        src={sticker.image}
                        alt={sticker.image}
                        id={sticker.image}
                        className='image'
                    />
                    
                    <h3>{sticker.name}</h3>
                    <div className='price'>
                        <h4>{sticker.currency}{sticker.price}</h4>
                    </div>

                    {buttonAddOrRemoveFromCart(idx, sticker.id)}
                </div>
            ))}
        </div>
    );
}

export default ShopPage;
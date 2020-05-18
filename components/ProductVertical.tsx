import {IProductAttributes, IProductPhoto} from '../interfaces/IProductAttributes';

export default function ProductVertical(props: IProductAttributes) {
    return <div>
        <div>
            {props.photos.map((el: IProductPhoto) => {
                if (el.isMain) {
                    return <img src={el.url} alt={el.alt} />
                }
            })}
        </div>
        <h3>{props.author}</h3>
        <p>{props.price}</p>
    </div>
}
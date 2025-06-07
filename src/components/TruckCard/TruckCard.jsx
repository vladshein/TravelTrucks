import { useDispatch } from "react-redux";
import css from "./TruckCard.module.css";
import { useNavigate } from "react-router-dom";
import { fetchOneOp } from "../../redux/contactsOps";

const TruckCard = ({
  data: {
    id,
    name,
    gallery,
    price,
    description,
    reviews,
    rating,
    location,
    TV,
    AC,
    gas,
    kitchen,
    microwave,
    transmission,
    radio,
    water,
    engine,
  },
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let descriptionCut = "";
  if (description) {
    descriptionCut = description.slice(0, 61);
  }

  const handleClick = () => {
    dispatch(fetchOneOp(id));
    navigate(`${id}`);
  };

  return (
    <div className={css.container}>
      <img className={css.imageItem} src={gallery[0].original} alt="" />

      <div className={css.cardDescription}>
        <div className={css.cardHead}>
          <div className={css.firstLine}>
            <h2>{name}</h2>
            <div className={css.firstLineEnd}>
              <h2 className={css.firstLineText}>€{price}</h2>
              <svg width="25" height="24">
                <use href={"/icons.svg#heart"}></use>
              </svg>
            </div>
          </div>
          <div className={css.secondLine}>
            <div className={css.ratingReview}>
              <svg width="16" height="16">
                <use href={"/icons.svg#yellow-star"}></use>
              </svg>
              <p className={css.reviewText}>
                {rating}({reviews.length} reviews)
              </p>
            </div>

            <div className={css.location}>
              <svg width="16" height="16">
                <use href={"/icons.svg#map"}></use>
              </svg>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={css.descriptionText}>{descriptionCut}...</p>
        <div className={css.categories}>
          {transmission && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#diagram"} />
              </svg>
              <p className={css.iconBoxText}>Automatic</p>
            </div>
          )}
          {engine && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#fuel"} />
              </svg>
              <p className={css.iconBoxText}>{engine}</p>
            </div>
          )}
          {TV && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#tv"} width={20} height={20} />
              </svg>
              <p className={css.iconBoxText}>TV</p>
            </div>
          )}
          {AC && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#wind"} />
              </svg>
              <p className={css.iconBoxText}>AC</p>
            </div>
          )}
          {kitchen && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#cup-hot"} />
              </svg>
              <p className={css.iconBoxText}>Kitchen</p>
            </div>
          )}
          {microwave && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#microwave1"} />
              </svg>
              <p className={css.iconBoxText}>Microwave</p>
            </div>
          )}

          {radio && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#radios"} />
              </svg>
              <p className={css.iconBoxText}>Radio</p>
            </div>
          )}
          {water && (
            <div className={css.iconBox}>
              <svg width={20} height={20}>
                <use href={"/icons.svg#water"} />
              </svg>
              <p className={css.iconBoxText}>Water</p>
            </div>
          )}
        </div>
        <button className={css.cardButton} onClick={handleClick}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default TruckCard;

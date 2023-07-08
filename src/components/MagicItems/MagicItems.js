import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { itemIconAssets } from "../../assets/Assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./MagicItems.module.css";

const MagicItems = (props) => {
  const { entries } = props;
  const { pathname } = useLocation();
  const storageKey = `swiper_${pathname}_activeIndex`;
  const [swiper, setSwiper] = useState();

  const initialSlide = sessionStorage.getItem(storageKey);
  sessionStorage.removeItem(storageKey);

  const swiperHandler = (sw) => {
    setSwiper(sw);
  };
  const linkClickedHandler = () => {
    if (swiper) sessionStorage.setItem(storageKey, swiper.activeIndex);
  };

  return (
    <section className={classes.main}>
      <div className={classes.header}>
        <h1>Магические предметы</h1>
        {/* <div className={classes.search}>
        <form><input></input></form>
        </div> */}
      </div>
      <Swiper
        onSwiper={swiperHandler}
        initialSlide={initialSlide ? initialSlide : 0}
        slidesPerView={"auto"}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className={classes.swiper}
      >
        {entries.map(([key, item]) => (
          <SwiperSlide key={key} className={classes.slide}>
            <Link
              to={`/magicItems/${key}`}
              className={classes.link}
              onClick={linkClickedHandler}
            >
              <img
                src={itemIconAssets[item.asset].path}
                alt={itemIconAssets[item.asset].alt}
                className={classes.itemIcon}
              />
              <div>{item.title}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MagicItems;

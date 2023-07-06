import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./MagicItems.module.css";

const MagicItems = (props) => {
  const { entries } = props;
  return (
    <section className={classes.main}>
      <div className={classes.header}>
        <h1>Магические предметы</h1>
        {/* <div className={classes.search}>
        <form><input></input></form>
        </div> */}
      </div>
      <Swiper
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
            <Link to={`/magicItems/${key}`} className={classes.link}>
              <div>{item.title}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MagicItems;

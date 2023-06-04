import React from "react";
import Slider from "react-slick";
import { WEB_URL } from "../baseURL";

const EventModal = ({ closeModal, event }) => {
  console.log(event);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
      <div className="edit-profile-header" onClick={closeModal}>
          <h2>{event.title}</h2>
          <i class="fa-solid fa-xmark close-modal"></i>
        </div>
        {event.photos.length > 0 ? (
          <div className="event-modal-images">
            <Slider {...settings}>
              {event.photos.map((el) => (
                <img
                  src={`${WEB_URL}${el}`}
                  alt=""
                  className="post-image"
                />
              ))}
            </Slider>
          </div>
        ) : (
          "No Images"
        )}
      </div>
    </>
  );
};

export default EventModal;

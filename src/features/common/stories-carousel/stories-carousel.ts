
import { register } from 'swiper/element/bundle';
import './stories-carousel.css';

register();

export interface TSAStoriesCarouselProps {
    imageURL?: string,
    heading?: string,
    date?: string,
    link?: string,
    content?: string,
}

document.addEventListener('DOMContentLoaded', () => {
    // const mySwiper = new Swiper('.swiper-container', {
    //     slidesPerView: 1,
    //     speed: 500,
    //     cssMode: true,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });
});


export const TSAStoriesCarousel = ({date, heading, link, imageURL, content}: TSAStoriesCarouselProps) => {
  return `
    <div>
        <swiper-container init="false">
            <swiper-slide>
                <tsa-stories-single>
                    <h2 slot="heading">${heading}</h2>
                    <div slot="content">${content}</div>
                    <span class="card__date" data-date="${date}" slot="date"></span>
                    <img slot="imageURL" src="${imageURL}" alt="sample image" />
                    <a slot="link" href="${link}" class="btn btn--small btn--dark--outline">[FPO] Read More1</a>   
                </tsa-stories-single>
            </swiper-slide>
            <swiper-slide>
                <tsa-stories-single>
                    <h2 slot="heading">${heading}</h2>
                    <div slot="content">${content}</div>
                    <span class="card__date" data-date="${date}" slot="date"></span>
                    <img slot="imageURL" src="${imageURL}" alt="sample image" />
                    <a slot="link" href="${link}" class="btn btn--small btn--dark--outline">[FPO] Read More1</a>   
                </tsa-stories-single>
            </swiper-slide>
            <swiper-slide>
                <tsa-stories-single>
                    <h2 slot="heading">${heading}</h2>
                    <div slot="content">${content}</div>
                    <span class="card__date" data-date="${date}" slot="date"></span>
                    <img slot="imageURL" src="${imageURL}" alt="sample image" />
                    <a slot="link" href="${link}" class="btn btn--small btn--dark--outline">[FPO] Read More1</a>   
                </tsa-stories-single>
            </swiper-slide>
            <swiper-slide>
                <tsa-stories-single>
                    <h2 slot="heading">${heading}</h2>
                    <div slot="content">${content}</div>
                    <span class="card__date" data-date="${date}" slot="date"></span>
                    <img slot="imageURL" src="${imageURL}" alt="sample image" />
                    <a slot="link" href="${link}" class="btn btn--small btn--dark--outline">[FPO] Read More1</a>   
                </tsa-stories-single>
            </swiper-slide>
        </swiper-container>
    </div>
  `
}
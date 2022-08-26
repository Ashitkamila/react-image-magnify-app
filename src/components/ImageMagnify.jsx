import { useState, useRef } from 'react';
import '../components/imageMagnify.css';
import ReactImageMagnify from 'react-image-magnify';

const images = [
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654893618122',
    'https://images.macrumors.com/t/egbqDs7OtftrKl9nJnbNgv1WET0=/1600x0/article-new/2021/09/Apple-iPhone-13-colors-lineup-2022.jpg',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/iphone14prorendergold_26052022.jpg?YaZAKe9OSytb1MXdk4R38l.s_8RJZ3s3&size=1200:675',
    'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhoneSE-double-infinity-220308_Full-Bleed-Image.jpg.large.jpg',
    'https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg',
];

const ImageMagnify =()=> {
    const [img, setImg] = useState(images[0]);
    const refs = useRef([]);

    const hoverHandler = (image, ind) => {
        setImg(image);
        refs.current[ind].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (ind !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    
    refs.current = [];
    const addRefs = (element) => {
        if (element && !refs.current.includes(element)) {
            refs.current.push(element);
        }
    };

    return (
        <div className="container">
            <div className="left">
                <div className="left_1">
                    {images.map((image, i) => (
                        <div
                            className={i === 0 ? 'img_wrap active' : 'img_wrap'}
                            key={i}
                            onMouseOver={() => hoverHandler(image, i)}
                            ref={addRefs}
                        >
                            <img src={image} alt="iphone-images" />
                        </div>
                    ))}
                </div>
                <div className="left_2">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Apple Iphone',
                                isFluidWidth: true,
                                src: img,
                            },
                            largeImage: {
                                src: img,
                                width: 500,
                                height: 800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '120%',
                                height: '120%',
                            },
                        }}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default ImageMagnify;
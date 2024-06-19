'use client';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Icon } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
export default function Carsosel({ data }) {
	let imageData = [
		{
			image:
				'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		},
		{
			image: 'https://mui.com/static/images/cards/paella.jpg',
			link: ''
		},
		{
			image:
				'https://mui.com/static/images/cards/contemplative-reptile.jpg',
			link: ''
		},
		{
			image:
				'https://images.unsplash.com/photo-1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max',
			link: ''
		}
	];
	let currentSlide = 2;

	const imageList = imageData.map((item, index) => {
		return (
			<a
				href={item.link}
				key={index}
				className={'each-slide-effect'}
			>
				<img
					src={item.image}
					loading='lazy'
					className={'w-full max-h-[30vh] object-cover'}
				/>
			</a>
		);
	});

	const properties = {
		prevArrow: (
			<button className='h-[30%] text-black rounded-r-md w-8 bg-white'>
				<KeyboardArrowLeftOutlinedIcon />
			</button>
		),
		nextArrow: (
			<button className='h-[30%] text-black rounded-l-md w-8 bg-white'>
				<KeyboardArrowRightOutlinedIcon />
			</button>
		)
	};

	return (
		<>
			<div className='mb-3'>
				<Slide
					infinite
					pauseOnHover
					canSwipe
					transitionDuration={500}
					indicators={true}
					{...properties}
				>
					{imageList}
				</Slide>
			</div>
		</>
	);
}

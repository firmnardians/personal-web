import { css } from '@emotion/css';
import Image from 'next/image';
import React, { memo } from 'react';
import { IconClock } from 'senirupa';

export default memo(function ListProduct({ data }) {
	return (
		<a href={data.product_url}>
			<div className={`row g-0 mb-4 pointer ${card}`}>
				<div className='col-auto'>
					<Image src={data.product_img} alt={data.product_name} width='80' height='80' className={imgProduct} />
				</div>

				<div className='col-10 justify-content-center ps-0 ps-md-4 pt-2 pt-md-0'>
					<div className=''>
						<h6 className='fw-bold'>{data.product_name}</h6>
						<p className='text-muted'>{data.product_desc}</p>

						<div className='pt-2 d-flex align-items-center justify-content-start'>
							<span className='position-relative' style={{ bottom: 1 }}>
								<IconClock size='14' color='#6c757d' />
							</span>
							<small className='text-muted ps-1 pe-2'>{data.product_year}</small> -{' '}
							<small className='text-muted ps-2'>{data.product_type}</small>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
});

const card = css`
	padding: 10px;
	border-radius: 8px;

	&:hover {
		background-color: #ececec;
	}
`;

const imgProduct = css`
	object-fit: cover;
	border-radius: 4px;
`;

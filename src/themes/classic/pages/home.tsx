import React from 'react';
import Blogs from '../components/Blogs';
import RecentBlogsHeading from '../components/RecentBlogsHeading';
import { posts } from '../../../lib/posts';

const Home: React.FC = () => (
	<div className="Home">
		<div style={{ maxWidth: '90%', paddingLeft: '5%', top: '-1em', position: 'relative' }}>
			<RecentBlogsHeading />
			<Blogs blogList={posts} />
		</div>
	</div>
);

export default Home;

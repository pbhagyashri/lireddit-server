import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { User } from './entities/User';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
	migrations: {
		path: path.join(__dirname, './migrations'),
		pathTs: './src/migrations',
		glob: '!(*.d).{js,ts}',
	},
	entities: [Post, User],
	dbName: 'lireddit',
	type: 'postgresql',
	debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];

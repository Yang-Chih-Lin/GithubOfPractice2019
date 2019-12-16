import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'v83i11n05',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,

}
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions'

const AppDataSource: DataSourceOptions = {
    type: 'mongodb',
    port: 27017,
    database: 'TestCollection',
    synchronize: true,
    logging: false,
    entities: ['src/entity/*{.ts,.js}'], // where our entities reside
    migrations: ['src/migrations/*{.ts,.js}'], // where our migrations reside
    subscribers: ['src/subscribers/*{.ts,.js}'], // where our subscribers reside
}

export default new DataSource({
    ...AppDataSource,
})

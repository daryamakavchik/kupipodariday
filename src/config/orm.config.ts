import { ConfigModule } from '@nestjs/config';
import dbConfig from './database.config';

ConfigModule.forRoot({
    isGlobal: true,
    load: [dbConfig]
})

export default dbConfig()
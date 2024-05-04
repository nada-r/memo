import { model, connect } from 'mongoose';
import { IDrop } from './interface';
import dropSchema from './models/Drop';


const Drop = model<IDrop>('drops', dropSchema);

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect('mongodb+srv://hugogrdpro:NDKDRrW8T53ZeDEa@cluster0.psvhqwd.mongodb.net/hackathon_memo');

    const drop = new Drop({
        title: 'NFT google',
        description: 'search engine',
        website: 'https://www.google.com/',
        image: ''
    });
    await drop.save();
    console.log(drop);
}
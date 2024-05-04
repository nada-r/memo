import { model, connect } from 'mongoose';
import { IDrop } from './interface';
import dropSchema from './models/Drop';


const Drop = model<IDrop>('drops', dropSchema);

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await connect(`mongodb+srv://hugogrdpro:2E5eZwF2MFpyRtI9@cluster0.psvhqwd.mongodb.net/hackathon_memo`);

    const drop = new Drop({
        title: 'NFT google',
        description: 'search engine',
        website: 'https://www.google.com/',
        image: '',
        badge: 1
    });
    await drop.save();
    console.log(drop);
}
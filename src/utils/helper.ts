//helper function or types

import { VideoObject } from "../components/carousel-card/CarouselCard";

const videos: VideoObject[] = 
[
      {
        "id": 1,
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "sources": [
          "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ],
        "subtitle": "By Blender Foundation",
        "thumb": "/src/assets/images/BigBuckBunny.jpg",
        "title": "Big Buck Bunny"
      },
      {
        "id": 2,
        "description": "The first Blender Open Movie from 2006",

        "sources": [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        ],
        "subtitle": "By Blender Foundation",
        "thumb": "/src/assets/images/ElephantsDream.jpeg",
        "title": "Elephant Dream"
      },
      {
        "id": 3,
        "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
        "sources": [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        ],
        "subtitle": "By Google",
        "thumb": "/src/assets/images/ForBiggerBlazes.jpeg",
        "title": "For Bigger Blazes"
      },
      {
        "id": 4,
        "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "sources": [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        ],
        "subtitle": "By Google",
        "thumb": "/src/assets/images/ForBiggerEscapes.jpeg",
        "title": "For Bigger Escape"
      },
      {
        "id": 5,
        "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
        "sources": [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        ],
        "subtitle": "By Google",
        "thumb": "/src/assets/images/ForBiggerFun.jpeg",
        "title": "For Bigger Fun"
      },
      {
        "id": 6,
        "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
        "sources": [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        ],
        "subtitle": "By Google",
        "thumb": "/src/assets/images/ForBiggerJoyrides.jpeg",
        "title": "For Bigger Joyrides"
      },
      {
        "id": 7,
        "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
        "sources": [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        ],
        "subtitle": "By Google",
        "thumb": "/src/assets/images/ForBiggerMeltdowns.jpeg",
        "title": "For Bigger Meltdowns"
      },
      {
        "id": 8,
        "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
        "sources": [
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
        ],
        "subtitle": "By Blender Foundation",
        "thumb": "/src/assets/images/Sintel.jpeg",
        "title": "Sintel"
      }
    ];


export const myApi =(): Promise<VideoObject[]> => {
    return new Promise((resolve) => {
      // Your API logic here
      // You can use fetch, axios, or any other method to make API calls
  
      // Example: resolve with mock data
      setTimeout(() => {
        resolve(videos);
      }, 1000)
  
    // //   Example: reject on error
    //   reject("Error occurred during API call");
    });
  };
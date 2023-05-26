This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This is an Avatar creator made by building a frontend wrapper on top of a stable diffusion model which was trained with my pictures. The model hosted on huggingface, expects a prompt as an input with 'Aryan' and generates an image. The project was created as one of [Buildspace's](https://buildspace.so) weekend hack to explore functionality of Stable Diffusion and how developers can build on top of it. 

If you want to create your own model, you can use this [public notebook](https://colab.research.google.com/drive/1k0xgavkPBXtFp_mcKmL9VYLzVPUniEWo?usp=sharing) to feed the model your own images. (All thanks to [Buildspace](https://buildspace.so) for the ipynb notebook!)

Head over to my hosted app to see it work. 

If you wanna dig deeper and understand how I created the app, go ahead and follow these steps

### Step 1 
To run the app locally, you need to use the sd-model, on top of which this wrapper interface has been created. 
Clone this [repository](https://huggingface.co/aryanmadhavverma/sd-amv) on [huggingface](https://huggingface.co). And get your API key to run the model

### Step 2
Create a .env file and store the API Key in this variable. 
```bash
HF_AUTH_KEY = your_key
```


Run the development server and see the trained stable diffusion model live in action!

```bash
npm run dev
# or
yarn dev
```


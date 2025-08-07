docker build -t news .

docker run -d --rm -p 3000:80 --name news-container news

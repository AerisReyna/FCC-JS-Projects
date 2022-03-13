
let quotes = [
    {text: 'Being an old maid is like death by drowning, a really delightful sensation after you cease to struggle.', author: 'Edna Ferber'},
    {text: 'I feel sure that no girl would go to the altar if she knew all.', author: 'Queen Victoria'},
    {text: 'Love is the difficult realization that something other than oneself is real.', author: 'Iris Murdoch'},
    {text: 'I like people who refuse to speak until they are ready to speak.', author: 'Lillian Hellman'},
    {text: 'A woman can look book moral and exciting ... if she also looks as if it was quite a struggle.', author: 'Edna Ferber'},
    {text: 'No one really listens to anyone else, and if you try it for a while you\'ll see why.', author: 'Mignon McLaughlin'},
    {text: 'I love my kids, but I wouldn\'t want them for friends.', author: 'Janet Sorensen'},
    {text: 'To be a hero or a heroine, one must give an order to oneself.', author: 'Simone Weil'},
    {text: 'It should be a very happy marriage --- they are both so much in love with him.', author: 'Irene Thomas'},
    {text: 'Loves conquers all things except poverty and toothache.', author: 'Mae West'},
    {text: 'Falling out of love is very enlightening. For a short while you see the world with new eyes.', author: 'Iris Murdoch'},
    {text: 'I love children --- especially when they cry, for then someone takes them away.', author: 'Nancy Mitford'},
    {text: 'Experts say you should never hit your children in anger. When is a good time? When you\'re feeling festive?', author: 'Roseanne Barr'},
    {text: 'I don\'t visit my parents often because Delta Airlines won\'t wait in the yard while I run in.', author: 'Margaret Smith'},
    {text: 'I\'m tough, ambitious and I know exactly what I want.', author: 'Madonna'},
    {text: 'I prefer liberty to chains of diamonds.', author: 'Lady Mary Wortley Montagu'},
    {text: 'Cynicism is an unpleasant way of telling the truth.', author: 'Lillian Hellman'},
    {text: 'The bitterest tears shed over graves are for words left unsaid and deeds left undone.', author: 'Harriet Beecher Stowe'},
    {text: 'Fortunately, psychoanalysis is not the only way to resolve inner conflicts. Life itself remains a very effective therapist.', author: 'Karen Horney'},
    {text: 'Most men who are not married by the age of thirty-five are either homosexual or really smart.', author: 'Becky Rodenbeck'},
    {text: 'You don\'t get to choose how you\'re going to die, or when. You can only decide how you\'re going to live now.', author: 'Joan Baez'},
    {text: 'People with bad consciences always fear the judgement of children.', author: 'Mary McCarthy'},
    {text: 'I am one of those unhappy persons who inspire bores to the greatest flights of art.', author: 'Dame Edith Sitwell'},
    {text: 'I moved to New York City for my health. I\'m paranoid and New York was the only place where my fears were justified.', author: 'Anita Weiss'},
    {text: 'Nobody really cares if you\'re miserable, so you might as well be happy.', author: 'Cythina Nelms'},
    {text: 'I don\'t mind being miserable as long as I\'m painting well.', author: 'Grace Hartigan'},
    {text: 'You may be disappointed if you fail, but you are doomed if you don\'t try.', author: 'Beverly Sills'},
    {text: 'Only good girls keep diaries. Bad girls don\'t have time.', author: 'Tallulah Bankhead'},
    {text: 'Give a man a fish and he has food for a day; teach him how to fish and you can get rid of him of the entire weekend.', author: 'Zenna Schaffer'},
    {text: 'Always be nice to your children because they are the ones who will choose your rest home.', author: 'Phyllis Diller'},
    {text: 'Where large sums of money are concerned, it is advisable to trust nobody.', author: 'Agatha Christie'},
    {text: 'The natural superiority of women is a biological fact, and a socially acknowledged reality.', author: 'Ashely Montagu'},
    {text: 'The penalty of success is to be bored by people who used to snub you.', author: 'Nancy Astor'},
];
let quoteButton = document.getElementById("new-quote");
let quoteText = document.getElementById("text");
let quoteAuthor = document.getElementById("author");
let body = document.getElementsByTagName("body")[0];
let copyTextLink = document.getElementById('copy-text');
let tweet = document.getElementById('tweet-quote');



newQuote();
randomizeColors();

quoteButton.addEventListener("click", () => {
    newQuote();
    randomizeColors();
})

function newQuote() {
    let quoteNum = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[quoteNum]["text"];
    quoteAuthor.innerHTML = ' - ' + quotes[quoteNum]["author"];
}

function randomizeColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let luminance = calcLum(red, green, blue);
    console.log(luminance)
    
    if (luminance < 127) {
        body.style.setProperty('--quote-box-color', 'white');
    } else {
        body.style.setProperty('--quote-box-color', 'black');
    }

    let rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    body.style.setProperty('--main-color', rgb);

    console.log(rgb)
    
}

function calcLum(red, green, blue) {
    return (0.2126 * red + 0.7152 * green + 0.0722 * blue);
}

copyTextLink.addEventListener('click', () => {
    let copyText = quoteText.innerHTML + " - " + quoteAuthor.innerHTML;
    navigator.clipboard.writeText(copyText);
})

tweet.onclick = () => {
    let tweetURL = "https://twitter.com/intent/tweet?text=" + quoteText.innerHTML + quoteAuthor.innerHTML + " <> See more @ aerisreyna.com";
    window.open(tweetURL, "_blank")
}
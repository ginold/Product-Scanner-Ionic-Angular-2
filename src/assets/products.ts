export class ProductArray {
  public static products: Array<Object> = [
    {
      id: 1,
      type: 'food',
      price: 4,
      name: 'McIntosh Apple',
      recipe: {
        title: 'Apple Surprise',
        ingredients: "1 1/2 lb. boneless, skinless chicken thighs, 2 tsp. chopped fresh thyme, Kosher salt and black pepper, 1 tbsp. canola oil, 1 (12-oz.) package shredded Brussels sprouts, 1 sliced apple",
        directions: "Season chicken thighs with fresh thyme, and kosher salt and black pepper. Cook in canola oil in a large skillet over medium-high heat until cooked through, 4 to 5 minutes per side; transfer to a plate. Add shredded Brussels sprouts, apple, red onion, and garlic clove to skillet. Cook, tossing, until Brussels sprouts are wilted and onion has softened, 5 to 6 minutes. Stir in white balsamic vinegar and brown sugar. Season with kosher salt and black pepper. Return chicken to pan and top with toasted pecans."
      },
      fact: 'Where did Steve Jobs find the name for his company?!',
      description: 'the national apple of Canada. The fruit has red and green skin, a tart flavour, and tender white flesh, which ripens in late September. In the 20th century it was the most popular cultivar in Eastern Canada and New England, and is considered an all-purpose apple, suitable both for cooking and eating raw. Apple Inc. employee Jef Raskin named the Macintosh line of personal computers after the fruit.',
      discount: '10%',
      nutrition: [
        {type: 'fat', value: "0.2gr"},
        {type: 'sugar', value: "10.6gr"},
        {type: 'calcium', value: "6.1mg"},
        {type: 'protein', value: "0.3gr"},
        {type: 'calories', value: "52 kcal"}
      ],
      img: 'mcintosh.jpg'
    },
    {
      id: 2,
      type: 'electronics',
      price: 399,
      name: 'PlayPhone',
      description: 'Smartphones are too mainstream and you cannot fulfill your hipster needs? Carry this exclusive vintage phone all over with you!',
      fact: 'Careful when dialing a number',
      features: [{type: 'Can make phone calls?', value: 'Perhaps'}],
      discount: '20%',
      img: 'phone.jpg'
    },
    {
      id: 3,
      type: 'food',
      price: 2.3,
      name: 'Plum',
      nutrition: [
        {type: 'fat', value: "0.1gr"},
        {type: 'sugar', value: "7.5gr"},
        {type: 'calcium', value: "4mg"},
        {type: 'protein', value: "0.5gr"},
        {type: 'calories', value: '30 kcal'}
      ],
      recipe: {
        title: 'Plum & marzipan pie',
        ingredients: '225g cold unsalted butter, chopped into small pieces, 350g plain flour, 50g icing sugar, 1 large egg yolk (save the white for brushing the pastry)',
        directions: 'Put the butter and flour in a food processor with 1/4 tsp salt and blend until the mixture resembles damp breadcrumbs. Or do this by rubbing the butter and flour together in a big bowl with your fingertips. Add the sugar and briefly whizz again or stir to combine. Whisk the egg yolk with 2 tbsp cold water, and drizzle over the flour mixture. Use the pulse button to blend the mixture once more, keep going until it starts to form larger clumps. If the mixture seems too dry, add a little more water a tsp or 2 at a time, but no more than 3 tsp in total.'
      },
      description: 'A plum is a fruit of the subgenus Prunus of the genus Prunus. The subgenus is distinguished from other subgenera (peaches, cherries, bird cherries, etc.) in the shoots having terminal bud and solitary side buds (not clustered), the flowers in groups of one to five together on short stems, and the fruit having a groove running down one side and a smooth stone (or pit).',
      img: 'plum.jpg'
    },
    {
      id: 4,
      type: 'food',
      price: 1,
      name: 'Pierogi Ruskie',
      description: ' \'Russian Pierogis\' - a national dish from Poland, oh irony! ',
      nutrition: [
        {type: 'fat', value: "20gr"},
        {type: 'sugar', value: "1.6gr"},
        {type: 'calcium', value: "2.1mg"},
        {type: 'protein', value: "4gr"},
        {type: 'calories', value: "102 kcal"}
      ],
      img: 'pierogi.jpg'
    },
    {
      id: 5,
      type: 'food',
      price: 7.9,
      name: 'Vodka',
      nutrition: [
        {type: 'fat', value: "0gr"},
        {type: 'sugar', value: "0gr"},
        {type: 'calcium', value: "0mg"},
        {type: 'alcohol', value: "14gr"},
        {type: 'calories', value: "99 kcal"}
      ],
      description: 'mahogany hall manager',
      fact: 'You may think that Vodka is a russian invention but according to Wikipedia - "The world\'s first written mention of the drink and of the word \"vodka\" was in 1405 from Akta Grodzkie recorder of deeds, in the court documents from the Palatinate of Sandomierz in Poland"',
      img: 'vodka.jpg'
    },
    {
      id: 6,
      type: 'household',
      price: 10,
      name: 'Piano Mug',
      description: 'You like pianos. You like mugs. You will love piano mugs.',
      features: [
        {type: 'capacity', value: '200ml'},
        {type: 'will the handle break?', value: 'I hope not'}
      ],
      img: 'pianomug.jpg'
    },
    {
      id: 7,
      type: 'household',
      price: 22.99,
      name: 'Quiddich Broomstick',
      discount: "99%",
      description: 'Clean your house like Voldemort cleaned Harrie\'s parents!' ,
      fact: 'If you try hard enough, you can try your hand at Quiddich with this broomstick',
      img: 'broomstick.jpg'
    },
    {
      id: 8,
      type: 'electronics',
      price: 22,
      name: 'MicroSD 32 GB Memory Card',
      description: 'No more space on your mobile device? Look no further because this little card will save you a lot of time and money by extending your mobile\'s capacity!',
      features : [
        {type: 'speed', value: "Read: 30 MB/S, Write: 10 MB/S"},
        {type: 'capacity', value: "32 Gigabytes"},
        {type: 'class', value: "10 U3"},
      ],
      img: 'microsd.png'
    },
    {
      id: 9,
      type: 'food',
      price: 4,
      name: 'Frozen Pizza Giuseppe',
      description: '- I want the best frozen pizza that exists! - Say no more, fam.',
      nutrition: [
        {type: 'fat', value: "22gr"},
        {type: 'sugar', value: "3.6gr"},
        {type: 'calcium', value: "6.1mg"},
        {type: 'protein', value: "0.3gr"},
        {type: 'calories', value: "320 kcal"}
      ],
      img: 'pizza.jpg'
    },
    {
      id: 10,
      type: 'electronics',
      price: 999,
      name: 'GeForce Titan X',
      features: [{type: 'Want 120Fps?', value: 'buy this card'}],
      description: 'Do you know how it feels to have a Titan X?',
      fact: 'PC MASTER RACE',
      img: 'geforce.jpg'
    }
]
  public constructor(){}
}


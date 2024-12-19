const dummyData = [
  {
    dp: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    media: [
      "https://picsum.photos/id/237/200/300",
      "https://picsum.photos/200/300",
    ],
    time: "2 hours ago",
    like: 10,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Jane Smith",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    media: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/id/1/200/300 ",
    ],
    time: "3 hours ago",
    like: 200,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Alex Johnson",
    description:
      "Sed sit amet orci enim. Donec venenatis ligula enim, et fermentum ligula posuere.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "1 day ago",
    like: 50,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Emily Davis",
    description:
      "Etiam sit amet dui mauris. Donec luctus nulla in orci maximus, vel viverra felis laoreet.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "5 hours ago",
    like: 62,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "William Brown",
    description:
      "Fusce ac ante tristique, auctor arcu non, feugiat purus. Phasellus venenatis mauris ut mi tincidunt efficitur.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "3 hours ago",
    like: 65,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Sophia Wilson",
    description:
      "Vivamus sit amet metus nec justo tincidunt auctor. Aliquam erat volutpat.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "1 day ago",
    like: 105,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "James Martinez",
    description:
      "Donec sollicitudin metus sed mauris volutpat laoreet. Fusce eget diam vel nunc laoreet tincidunt.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "10 minutes ago",
    like: 1056,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Isabella Moore",
    description:
      "Quisque tincidunt risus eu lorem scelerisque, vitae vehicula nisl cursus.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "2 days ago",
    like: 41,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Michael Garcia",
    description:
      "Mauris tristique suscipit ipsum, vel porttitor purus varius ac.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "8 hours ago",
    like: 2,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Olivia Rodriguez",
    description:
      "Pellentesque ac laoreet mi, vitae viverra odio. Nam a feugiat libero.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "4 hours ago",
    like: 55,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Ethan Clark",
    description:
      "Pellentesque ac tincidunt neque, sit amet aliquam lectus. Integer scelerisque quam velit.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "6 hours ago",
    like: 8,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Lily Harris",
    description:
      "Fusce sit amet velit at nunc sollicitudin vulputate eu sed urna.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "1 day ago",
    like: 6,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Mason Lee",
    description:
      "Aenean ut leo at eros sollicitudin feugiat. Curabitur malesuada sapien id quam.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "3 hours ago",
    like: 72,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Ava Walker",
    description:
      "Donec interdum neque in orci maximus, id luctus magna scelerisque.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "5 hours ago",
    like: 9,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Lucas King",
    description:
      "In euismod, lectus vel vestibulum tincidunt, sapien turpis tempus urna.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "2 days ago",
    like: 62,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Mia Scott",
    description:
      "Suspendisse potenti. Morbi tincidunt, felis id ullamcorper cursus, tortor libero egestas.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "1 hour ago",
    like: 62,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Benjamin Perez",
    description:
      "Mauris aliquet neque id tortor pharetra, vitae gravida eros gravida.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "4 hours ago",
    like: 62,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Charlotte Taylor",
    description:
      "Cras et dolor sit amet ante pretium volutpat. Aenean in sapien at urna tristique.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "7 hours ago",
    like: 62,
  },
  {
    dp: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Daniel Evans",
    description:
      "Cras euismod ante sit amet felis tincidunt, non lacinia felis dictum.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "1 day ago",
    like: 62,
  },
  {
    dp: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Grace Wilson",
    description:
      "Nullam nec augue sed libero varius tempor. Donec facilisis nunc id turpis feugiat.",
    media: [
      "https://via.placeholder.com/150/0000FF/808080",
      "https://via.placeholder.com/150/FF0000/FFFFFF",
    ],
    time: "10 minutes ago",
    like: 62,
  },
];

export default dummyData;

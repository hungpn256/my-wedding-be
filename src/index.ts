import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import route from './routes';
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const origin = req.get('origin');
  res.header('Access-Control-Expose-Headers', 'total-record');
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Access-Control-Request-Method, Access-Control-Allow-Headers, Access-Control-Request-Headers',
  );

  if (req.method === 'OPTIONS') {
    const optionStatus = 204;
    res.sendStatus(optionStatus);
  } else {
    next();
  }
});

app.use('/api/', route);

const corsOption = {
  origin: '*',
  methods: 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE',
  credentials: true,
};

app.use(cors(corsOption));
const port = 3333;
// const RSVPs = [
//   {
//     content:
//       'Chuyện tình yêu đôi uyên ương đẹp quá. Hẳn là chàng vòng nhẹ tay qua eo nàng từ phía sau... đẹp như ngôn tình và tui đoán từ đó có tình yêu ngôn tình đã 4 năm giờ đơm hoa kết trái. Chúc 2 em bước vào hôn nhân viết tiếp câu chuyện tình yêu ngôn tình nhé. Tướng phu thê từ hàm răng tới khuôn mặt, đúng kiểu trời xe duyên cho lứa đôi gặp nhau rồi. HPWD!!!',
//     email: 'hadtt23@viettel.com.vn',
//     name: 'Đinh Thị Thúy Hà',
//     isAproved: true,
//   },
//   {
//     content:
//       'Chúc hai bạn sẽ có một cuộc sống hôn nhân tràn đầy hạnh phúc và niềm vui, cùng nhau xây dựng một gia đình thật ấm áp và bền vững. Hạnh phúc bên nhau đến đầu bạc răng long nhé! <3',
//     email: 'a@gmail.com',
//     name: 'Uri',
//     isAproved: true,
//   },
//   {
//     content:
//       'Văn chat gpt: Chúc mừng hạnh phúc đôi uyên ương, Cùng nhau sánh bước, mãi vấn vương. Tay nắm tay đi qua bão gió, Đong đầy yêu thương, trọn đời thương. Trăm năm hạnh phúc, mãi bên nhau, Nụ cười rạng rỡ, mắt sáng màu. Chúc đôi lứa trọn niềm vui sống, Mãi mãi bên nhau, thắm duyên đầu!',
//     email: 'quyduong251325@gmail.com',
//     name: 'Quý đẹp trai',
//     isAproved: true,
//   },
//   {
//     content:
//       'Sr hưng a bị trùng đám cưới anh họ ở nhà ko tham gia được. Anh chúc 2 em mãi mãi hạnh phúc bên nhau nha.',
//     email: 'vietpd@gmail.com',
//     name: 'Phạm đức việt',
//     isAproved: true,
//   },
//   {
//     content:
//       'Bà mối chúc hai bạn mãi hạnh phúc, sinh em bé nhờ dành slot cho tôi làm thông gia nhé, dù có gia đình nhỏ mới nhưng chúng mình vẫn thường xuyên gặp nhau như bây giờ nha',
//     email: 'phamthuyduonglibra@gmail.com',
//     name: 'Dương xinh',
//     isAproved: true,
//   },
//   {
//     content:
//       'Con và gia đình xin chúc cho cậu và người thương hạnh phúc viên mãn 8386 mãi đỉnh mãi đỉnh mãi đỉnh 🫶🏻',
//     email: 'chuppytv8421@gmail.com',
//     name: 'Hà Anh',
//     isAproved: true,
//   },
//   {
//     content:
//       'Chúc a chúc chị chúc gđ có một ngày thật tuyệt và hạnh phúc, chúc a Hưng thật chín chắn kiên cường giỏi giang để gánh vác giang sơn. Chúc chị Hà xinh đẹp đáng yêu, đảm đang săn sóc. Chúc a chị hạnh phúc trăm năm',
//     email: 'chiennm.ptit@gmail.com',
//     name: 'Em Chiến đzai của a Hưng',
//     isAproved: true,
//   },
//   {
//     content:
//       'Chúc cậu mợ trăm năm hạnh phúc, mãi mãi bên nhau trong tình yêu thương và thấu hiểu. Mong rằng cuộc sống chung của hai người sẽ luôn ngập tràn niềm vui, tiếng cười và những kỷ niệm đẹp. Chúc cho tình yêu của các cậu ngày càng bền chặt và tỏa sáng hơn nữa!',
//     email: 'xuannhatvn211@gmail.com',
//     name: 'cháu Nhất',
//     isAproved: true,
//   },
//   {
//     content:
//       'Chúc mừng hạnh phúc vợ chồng bạn! Thật vinh dự khi được mời và dự lễ cưới của vợ chồng bạn. Chúc vợ chồng bạn sớm sinh quý tử 😂',
//     email: 'tuandat0803@gmail.com',
//     name: 'Bạn Đạt',
//     isAproved: true,
//   },
//   {
//     content: 'Chúc 2 bạn hạnh phúc nhaa ❤️ chúc bạn sớm có 1 em bé siu kute như Lucia 😆😆',
//     email: 'dttggiang2009@gmail.com',
//     name: 'Giang a3',
//     isAproved: true,
//   },
//   {
//     content: 'Chúc mừng hạnh phúc 2 vợ chồng! 8386 nhé :v',
//     email: 'hieukinkon@gmail.com',
//     name: 'Hiếu giấu tên',
//     isAproved: true,
//   },
//   {
//     content:
//       'Thời gian qua đi, để lại cho ta những kỷ niệm và bài học quý giá. Chúc 2 bạn hạnh phúc, đồng hành cùng nhau những lúc khó khăn và tận hưởng cùng nhau những phút giây hạnh phúc. Chúc tình yêu của đôi bạn trẻ bền chặt và đầy yêu thương!',
//     email: 'Kieutu@mbbank.com.vn',
//     name: 'NYC - KMT',
//     isAproved: true,
//   },
//   {
//     content: 'Chúc Hà sẽ mãi mãi hạnh phúc , love u 😘',
//     email: 'Tinhngo109@gmail.com',
//     name: 'Tình đây',
//     isAproved: true,
//   },
//   {
//     content: 'Chúc bạn Hà hạnh phúc trăm năm cùng với người bạn đời của mình nhé',
//     email: 'nguyenvananh221120@gmail.com',
//     name: 'Văn Anh A3',
//     isAproved: true,
//   },
//   {
//     content:
//       'Chúc mừng hạnh phúc đôi bạn trẻ🫶🏻 Chúc 2 bạn luôn vui vẻ, hạnh phúc và bình yên khi về chung một mái nhà. Những khó khăn sẽ là động lực để cả 2 càng hiểu nhau và yêu nhau hơn. Niềm vui và kỷ niệm sẽ là sự động viên để cả 2 vững tiến bước tiếp. Chúc 2 bạn mãi đỉnh, mãi đỉnh ❤️',
//     email: 'quynhshine2kk@gamil.com',
//     name: 'Bạn Quỳnh Soodibasoodibam nè!',
//     isAproved: true,
//   },
//   {
//     content: 'Chúc mừng hạnh phúc hai bạn! Chúc hai bạn mãi sát cánh bên nhau, sớm sinh quý tử nha',
//     email: 'quin@gmail.com',
//     name: 'Quỳnh a3',
//     isAproved: true,
//   },
//   {
//     content:
//       'Còn dăm bữa nữa tới ngày vui Đôi bạn Hưng Hà nên đôi vợ chồng Chúc cho lửa mặn hương nồng Răng long đầu bạc vẫn còn có nhau, Ngày xưa hai chữ làm quen Quen rồi bốn chữ chúng mình yêu nhau Và rồi hai chữ trọn đời Bây giờ bốn chữ suốt đời bên nhau. Chúc mừng ngày trọng đại tới hai bạn. Hạnh phúc bền lâu và trọn vẹn nhé!',
//     email: 'nguyennamc503@gmail.com',
//     name: 'Nam - Đội Cấn',
//     isAproved: true,
//   },
//   {
//     content:
//       'Nhận được thư mời, xem những tấm ảnh ngọt ngào lòng vui mừng và Chúc mừng Hà đã tìm một nửa kia. Mong hai bạn sắp tới luôn kề cạnh, gắn bó và cùng nhau vun đắp một gia đình nhỏ siêu hạnh phúc ^^ Chúc mừng, Chúc mừng và Chúc mừng 2 bạn !!!',
//     email: 'noah5ward8814@gmail.com',
//     name: 'Khoai',
//     isAproved: true,
//   },
//   {
//     content:
//       'Đôi chim câu có tướng phu thê quá, chắc chắn là về với nhau hạnh phúc ngập trời. Chúc mừng hạnh phúc hai bạn, trọn đời trọn kiếp bên nhau nhé!',
//     email: 'ntmchau2202@gmail.com',
//     name: 'Chou Chou',
//     isAproved: true,
//   },
// ];
const connect = async () => {
  await mongoose.connect(
    'mongodb+srv://phamnanghung25:EtMYIuOcOSDDjvcR@my-wedding.qjxmh.mongodb.net/?retryWrites=true&w=majority&appName=my-wedding',
  );
  // await RSVP.create(RSVPs);
  app.listen(port, async () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening on port ${port}`);
  });
};

connect();

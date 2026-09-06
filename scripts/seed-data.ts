export type Phrase = { vi: string; en: string };
export type LessonSeed = { titleVi: string; titleEn: string; phrases: Phrase[] };
export type UnitSeed = { titleVi: string; titleEn: string; descriptionVi: string; descriptionEn: string; lessons: LessonSeed[] };

export const curriculum: UnitSeed[] = [
  {
    titleVi: "Bắt đầu một cuộc trò chuyện", titleEn: "Starting a conversation",
    descriptionVi: "Chào hỏi, giới thiệu và tạo ấn tượng đầu tiên tự nhiên.", descriptionEn: "Greet people, introduce yourself and make a natural first impression.",
    lessons: [
      { titleVi: "Lời chào đúng lúc", titleEn: "Greetings for every moment", phrases: [{ vi: "Chào buổi sáng", en: "Good morning" }, { vi: "Rất vui được gặp bạn", en: "Nice to meet you" }, { vi: "Dạo này bạn thế nào?", en: "How have you been?" }, { vi: "Hẹn gặp lại nhé", en: "See you later" }] },
      { titleVi: "Giới thiệu bản thân", titleEn: "Introducing yourself", phrases: [{ vi: "Mình tên là Minh", en: "My name is Minh" }, { vi: "Mình đến từ Việt Nam", en: "I am from Vietnam" }, { vi: "Mình sống ở thành phố Hồ Chí Minh", en: "I live in Ho Chi Minh City" }, { vi: "Mình đang học tiếng Anh", en: "I am learning English" }] },
      { titleVi: "Hỏi thông tin cơ bản", titleEn: "Basic personal questions", phrases: [{ vi: "Bạn tên là gì?", en: "What is your name?" }, { vi: "Bạn đến từ đâu?", en: "Where are you from?" }, { vi: "Bạn làm nghề gì?", en: "What do you do?" }, { vi: "Bạn có nói tiếng Việt không?", en: "Do you speak Vietnamese?" }] },
      { titleVi: "Phép lịch sự thiết yếu", titleEn: "Everyday politeness", phrases: [{ vi: "Làm ơn giúp tôi", en: "Please help me" }, { vi: "Cảm ơn bạn rất nhiều", en: "Thank you very much" }, { vi: "Không có gì", en: "You are welcome" }, { vi: "Xin lỗi đã làm phiền", en: "Sorry to bother you" }] },
    ],
  },
  {
    titleVi: "Nhịp sống hằng ngày", titleEn: "Everyday routines",
    descriptionVi: "Nói về thời gian, thói quen và những việc bạn làm mỗi ngày.", descriptionEn: "Talk about time, habits and the things you do every day.",
    lessons: [
      { titleVi: "Buổi sáng của tôi", titleEn: "My morning", phrases: [{ vi: "Tôi thức dậy lúc sáu giờ", en: "I wake up at six" }, { vi: "Tôi thường uống cà phê", en: "I usually drink coffee" }, { vi: "Tôi đi làm bằng xe máy", en: "I go to work by motorbike" }, { vi: "Tôi luôn ăn sáng", en: "I always eat breakfast" }] },
      { titleVi: "Lịch trong ngày", titleEn: "Today's schedule", phrases: [{ vi: "Hôm nay tôi khá bận", en: "I am quite busy today" }, { vi: "Cuộc họp bắt đầu lúc chín giờ", en: "The meeting starts at nine" }, { vi: "Tôi rảnh sau bữa trưa", en: "I am free after lunch" }, { vi: "Chúng ta gặp nhau lúc năm giờ nhé", en: "Let us meet at five" }] },
      { titleVi: "Ở nhà", titleEn: "At home", phrases: [{ vi: "Tôi đang nấu bữa tối", en: "I am cooking dinner" }, { vi: "Bạn có thể đóng cửa không?", en: "Could you close the door?" }, { vi: "Phòng khách ở tầng dưới", en: "The living room is downstairs" }, { vi: "Tôi cần giặt quần áo", en: "I need to do the laundry" }] },
      { titleVi: "Cuối tuần", titleEn: "The weekend", phrases: [{ vi: "Cuối tuần này bạn làm gì?", en: "What are you doing this weekend?" }, { vi: "Tôi muốn nghỉ ngơi ở nhà", en: "I want to relax at home" }, { vi: "Chúng tôi sẽ đi xem phim", en: "We are going to see a movie" }, { vi: "Nghe hay đấy", en: "That sounds good" }] },
    ],
  },
  {
    titleVi: "Ăn uống & cà phê", titleEn: "Food and coffee",
    descriptionVi: "Gọi món, hỏi khẩu vị và xử lý các tình huống tại quán.", descriptionEn: "Order food, discuss preferences and handle common restaurant moments.",
    lessons: [
      { titleVi: "Gọi món", titleEn: "Ordering food", phrases: [{ vi: "Cho tôi xem thực đơn được không?", en: "Could I see the menu?" }, { vi: "Tôi muốn gọi món này", en: "I would like to order this" }, { vi: "Bạn gợi ý món nào?", en: "What do you recommend?" }, { vi: "Cho tôi một phần phở", en: "I will have a bowl of pho" }] },
      { titleVi: "Khẩu vị", titleEn: "Tastes and preferences", phrases: [{ vi: "Tôi không ăn cay", en: "I do not eat spicy food" }, { vi: "Món này hơi mặn", en: "This is a little salty" }, { vi: "Tôi thích đồ ăn Việt Nam", en: "I like Vietnamese food" }, { vi: "Món này rất ngon", en: "This is delicious" }] },
      { titleVi: "Ở quán cà phê", titleEn: "At a café", phrases: [{ vi: "Cho tôi một ly cà phê sữa", en: "I would like a milk coffee" }, { vi: "Bạn dùng nóng hay đá?", en: "Would you like it hot or iced?" }, { vi: "Cho ít đường thôi", en: "Just a little sugar, please" }, { vi: "Tôi có thể ngồi ở đây không?", en: "May I sit here?" }] },
      { titleVi: "Thanh toán", titleEn: "Paying the bill", phrases: [{ vi: "Cho tôi xin hóa đơn", en: "Could I have the bill?" }, { vi: "Tôi trả bằng thẻ được không?", en: "Can I pay by card?" }, { vi: "Chúng ta chia đôi nhé", en: "Let us split the bill" }, { vi: "Bạn cứ giữ tiền thừa", en: "Keep the change" }] },
    ],
  },
  {
    titleVi: "Đi lại trong thành phố", titleEn: "Getting around the city",
    descriptionVi: "Hỏi đường, đặt xe, nhận phòng và tự tin khi du lịch.", descriptionEn: "Ask for directions, book rides, check in and travel with confidence.",
    lessons: [
      { titleVi: "Hỏi đường", titleEn: "Asking for directions", phrases: [{ vi: "Ga tàu ở đâu?", en: "Where is the train station?" }, { vi: "Nó có xa đây không?", en: "Is it far from here?" }, { vi: "Đi thẳng rồi rẽ trái", en: "Go straight and turn left" }, { vi: "Mất khoảng mười phút", en: "It takes about ten minutes" }] },
      { titleVi: "Đặt xe", titleEn: "Booking a ride", phrases: [{ vi: "Tôi cần một chiếc taxi", en: "I need a taxi" }, { vi: "Hãy đưa tôi đến địa chỉ này", en: "Please take me to this address" }, { vi: "Bạn có thể dừng ở đây", en: "You can stop here" }, { vi: "Chuyến đi hết bao nhiêu?", en: "How much is the ride?" }] },
      { titleVi: "Tại khách sạn", titleEn: "At the hotel", phrases: [{ vi: "Tôi đã đặt một phòng", en: "I have booked a room" }, { vi: "Tôi có thể nhận phòng sớm không?", en: "Can I check in early?" }, { vi: "Bữa sáng được phục vụ lúc mấy giờ?", en: "What time is breakfast served?" }, { vi: "Mật khẩu Wi-Fi là gì?", en: "What is the Wi-Fi password?" }] },
      { titleVi: "Khi gặp sự cố", titleEn: "When things go wrong", phrases: [{ vi: "Tôi bị lạc", en: "I am lost" }, { vi: "Tôi đã để quên túi", en: "I left my bag behind" }, { vi: "Bạn có thể giúp tôi không?", en: "Could you help me?" }, { vi: "Tôi cần gọi cảnh sát", en: "I need to call the police" }] },
    ],
  },
  {
    titleVi: "Bạn bè & kết nối", titleEn: "Friends and connection",
    descriptionVi: "Mời, trò chuyện, chia sẻ cảm xúc và giữ liên lạc.", descriptionEn: "Invite people, make conversation, share feelings and stay connected.",
    lessons: [
      { titleVi: "Rủ ai đó đi chơi", titleEn: "Making plans", phrases: [{ vi: "Bạn có muốn đi cà phê không?", en: "Would you like to get coffee?" }, { vi: "Tối thứ sáu bạn rảnh không?", en: "Are you free on Friday night?" }, { vi: "Mấy giờ thì tiện cho bạn?", en: "What time works for you?" }, { vi: "Tôi sẽ nhắn cho bạn sau", en: "I will text you later" }] },
      { titleVi: "Trò chuyện tự nhiên", titleEn: "Making small talk", phrases: [{ vi: "Hôm nay trời đẹp nhỉ", en: "The weather is nice today" }, { vi: "Bạn thấy nơi này thế nào?", en: "What do you think of this place?" }, { vi: "Bạn thường làm gì lúc rảnh?", en: "What do you usually do for fun?" }, { vi: "Tôi cũng vậy", en: "Me too" }] },
      { titleVi: "Nói về cảm xúc", titleEn: "Talking about feelings", phrases: [{ vi: "Hôm nay tôi thấy rất vui", en: "I feel great today" }, { vi: "Tôi hơi lo lắng", en: "I am a little nervous" }, { vi: "Đừng lo, mọi chuyện sẽ ổn", en: "Do not worry, it will be okay" }, { vi: "Tôi rất tự hào về bạn", en: "I am very proud of you" }] },
      { titleVi: "Giữ liên lạc", titleEn: "Staying in touch", phrases: [{ vi: "Cho tôi số điện thoại của bạn nhé", en: "Can I have your phone number?" }, { vi: "Bạn có dùng mạng xã hội không?", en: "Are you on social media?" }, { vi: "Nhắn tin cho tôi khi bạn về đến nhà", en: "Text me when you get home" }, { vi: "Chúng ta sớm gặp lại nhé", en: "Let us catch up soon" }] },
    ],
  },
  {
    titleVi: "Học tập & công việc", titleEn: "Study and work",
    descriptionVi: "Trao đổi công việc, trình bày ý tưởng và học hiệu quả.", descriptionEn: "Discuss work, present ideas and study more effectively.",
    lessons: [
      { titleVi: "Tại văn phòng", titleEn: "At the office", phrases: [{ vi: "Tôi đang làm việc tại nhà", en: "I am working from home" }, { vi: "Bạn gửi tập tin cho tôi nhé", en: "Please send me the file" }, { vi: "Tôi sẽ hoàn thành trước thứ sáu", en: "I will finish it by Friday" }, { vi: "Chúng ta cần thêm thời gian", en: "We need more time" }] },
      { titleVi: "Trong cuộc họp", titleEn: "In a meeting", phrases: [{ vi: "Chúng ta bắt đầu nhé", en: "Shall we get started?" }, { vi: "Tôi đồng ý với ý kiến đó", en: "I agree with that point" }, { vi: "Bạn có thể nói rõ hơn không?", en: "Could you clarify that?" }, { vi: "Hãy quay lại vấn đề chính", en: "Let us get back to the main point" }] },
      { titleVi: "Trình bày ý tưởng", titleEn: "Presenting an idea", phrases: [{ vi: "Tôi muốn chia sẻ một ý tưởng", en: "I would like to share an idea" }, { vi: "Mục tiêu chính là tiết kiệm thời gian", en: "The main goal is to save time" }, { vi: "Đây là cách nó hoạt động", en: "This is how it works" }, { vi: "Bạn có câu hỏi nào không?", en: "Do you have any questions?" }] },
      { titleVi: "Học trên lớp", titleEn: "In the classroom", phrases: [{ vi: "Tôi chưa hiểu câu hỏi", en: "I do not understand the question" }, { vi: "Bạn nhắc lại được không?", en: "Could you repeat that?" }, { vi: "Từ này có nghĩa là gì?", en: "What does this word mean?" }, { vi: "Tôi cần luyện tập thêm", en: "I need more practice" }] },
    ],
  },
  {
    titleVi: "Sức khỏe & nhu cầu", titleEn: "Health and needs",
    descriptionVi: "Mô tả triệu chứng, mua thuốc và chăm sóc bản thân.", descriptionEn: "Describe symptoms, buy medicine and take care of yourself.",
    lessons: [
      { titleVi: "Nói về cơ thể", titleEn: "Talking about your body", phrases: [{ vi: "Tôi bị đau đầu", en: "I have a headache" }, { vi: "Cổ họng tôi bị đau", en: "My throat hurts" }, { vi: "Tôi cảm thấy chóng mặt", en: "I feel dizzy" }, { vi: "Tôi cần nghỉ ngơi", en: "I need to rest" }] },
      { titleVi: "Tại nhà thuốc", titleEn: "At the pharmacy", phrases: [{ vi: "Tôi cần thuốc cảm", en: "I need some cold medicine" }, { vi: "Tôi nên uống thuốc này khi nào?", en: "When should I take this?" }, { vi: "Thuốc này có gây buồn ngủ không?", en: "Does this make you sleepy?" }, { vi: "Tôi bị dị ứng với penicillin", en: "I am allergic to penicillin" }] },
      { titleVi: "Gặp bác sĩ", titleEn: "Seeing a doctor", phrases: [{ vi: "Tôi muốn đặt lịch khám", en: "I would like to make an appointment" }, { vi: "Tôi bị như vậy hai ngày rồi", en: "I have had this for two days" }, { vi: "Tôi có cần làm xét nghiệm không?", en: "Do I need a test?" }, { vi: "Khi nào tôi sẽ khỏe hơn?", en: "When will I feel better?" }] },
      { titleVi: "Thói quen lành mạnh", titleEn: "Healthy habits", phrases: [{ vi: "Tôi cố gắng ngủ đủ giấc", en: "I try to get enough sleep" }, { vi: "Tôi đi bộ mỗi buổi sáng", en: "I walk every morning" }, { vi: "Bạn nên uống nhiều nước hơn", en: "You should drink more water" }, { vi: "Sức khỏe tinh thần cũng quan trọng", en: "Mental health is important too" }] },
    ],
  },
  {
    titleVi: "Nói tự nhiên hơn", titleEn: "Sounding more natural",
    descriptionVi: "Phản hồi nhanh, nêu quan điểm và xử lý sắc thái hội thoại.", descriptionEn: "Respond quickly, express opinions and handle conversational nuance.",
    lessons: [
      { titleVi: "Phản hồi ngắn", titleEn: "Natural short responses", phrases: [{ vi: "Thật vậy à?", en: "Is that so?" }, { vi: "Tất nhiên rồi", en: "Of course" }, { vi: "Cũng tùy", en: "It depends" }, { vi: "Tôi hiểu ý bạn", en: "I see what you mean" }] },
      { titleVi: "Nêu quan điểm", titleEn: "Sharing opinions", phrases: [{ vi: "Theo tôi thì đó là ý hay", en: "I think that is a good idea" }, { vi: "Thành thật mà nói, tôi không chắc", en: "Honestly, I am not sure" }, { vi: "Tôi nhìn vấn đề hơi khác", en: "I see it a little differently" }, { vi: "Điều đó hoàn toàn hợp lý", en: "That makes perfect sense" }] },
      { titleVi: "Làm rõ ý", titleEn: "Clarifying meaning", phrases: [{ vi: "Ý bạn là gì?", en: "What do you mean?" }, { vi: "Nói cách khác là…", en: "In other words..." }, { vi: "Để tôi nói lại cho rõ", en: "Let me put that another way" }, { vi: "Đó không hẳn là điều tôi muốn nói", en: "That is not quite what I meant" }] },
      { titleVi: "Kết thúc cuộc trò chuyện", titleEn: "Ending a conversation", phrases: [{ vi: "Nói chuyện với bạn rất vui", en: "It was great talking to you" }, { vi: "Tôi phải đi bây giờ", en: "I have to get going now" }, { vi: "Cảm ơn vì đã dành thời gian", en: "Thanks for your time" }, { vi: "Chúc bạn một ngày tốt lành", en: "Have a great day" }] },
    ],
  },
];

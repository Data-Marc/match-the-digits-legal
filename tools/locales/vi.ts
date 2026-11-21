import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_SUPPORT, IDS, LICENSES, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "vi/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, doanh nghiệp tư nhân theo luật Pháp), với tên thương mại Primisia";

export const vi: Locale = {
  code: "vi",
  dir,
  name: "Tiếng Việt",
  updated: "21 tháng 11 năm 2026",
  ui: {
    legalDocuments: "Tài liệu pháp lý",
    privacyPolicy: "Chính sách quyền riêng tư",
    termsOfUse: "Điều khoản sử dụng",
    support: "Hỗ trợ",
    privacySub: "Dữ liệu, quảng cáo, sự đồng ý và quyền của bạn",
    termsSub: "Giấy phép, quảng cáo, giao dịch mua Xóa quảng cáo và trách nhiệm",
    supportSub: "Liên hệ, câu hỏi thường gặp và trợ giúp mua hàng",
    lastUpdated: "Cập nhật lần cuối",
    footer: "Phát hành bởi Marc SAMSON EI, với tên thương mại Primisia",
    indexDesc: "Chính sách quyền riêng tư, điều khoản sử dụng và hỗ trợ cho trò chơi giải đố Match the Digits.",
    privacyDesc: "Quyền riêng tư Match the Digits: tiến trình trên máy, bảng xếp hạng, bảo mật, quảng cáo, Premium và xóa tài khoản.",
    termsDesc: "Điều khoản sử dụng của trò chơi Match the Digits: giấy phép, quảng cáo, giao dịch mua một lần Xóa quảng cáo, trách nhiệm và luật áp dụng.",
    supportDesc: "Hỗ trợ, liên hệ và câu hỏi thường gặp về trò chơi giải đố Match the Digits.",
    supportIntro: "Bạn cần trợ giúp? Hãy viết cho chúng tôi và ghi rõ mẫu thiết bị nếu có thể.",
    emailSupport: "Hỗ trợ qua email",
    faqTitle: "Câu hỏi thường gặp",
    language: "Ngôn ngữ",
    translationNote: "Bản dịch này chỉ nhằm mục đích tham khảo. Trong trường hợp có khác biệt, bản tiếng Pháp được ưu tiên áp dụng.",
  },
  faq: [
    ["Cần tài khoản không?", "Không cần email hoặc mật khẩu để chơi. Bảng xếp hạng tạo danh tính ẩn danh với biệt danh được cấp."],
    ["Có bao nhiêu gợi ý và lần thêm?", "Tối đa 4 gợi ý, 5 lần thêm mỗi bảng. Hai lần thêm đầu miễn phí; không Premium, 3 lần sau và gợi ý đề nghị quảng cáo thưởng."],
    ["Nếu quảng cáo không chạy?", "Nếu không khả dụng sau yêu cầu, thao tác có thể được cấp không video trong số lượt còn lại. Từ chối hoặc tự đóng trước thưởng không được cấp."],
    ["Premium là thuê bao?", "Không, mua một lần không quảng cáo, cả gợi ý và thêm. Giới hạn không đổi."],
    ["Khôi phục Premium thế nào?", "Trong Cài đặt, khôi phục với tài khoản và cửa hàng gốc. Không tự chuyển giữa Apple và Google."],
    ["Xóa tài khoản xếp hạng thế nào?", "Yêu cầu và theo dõi ở mục tài khoản trong Cài đặt. Không vào được ứng dụng, email hỗ trợ với Match the Digits và biệt danh/mã xếp hạng, không mã truy cập hay mật khẩu. Có thể cần xác minh."],
    ["Có thể trở lại sau xóa?", "Sau hoàn tất có thể xin danh tính và biệt danh mới, tùy hạn chế chống lạm dụng. Tiến trình giữ lại có thể đăng lại kỷ lục. Premium giữ theo quy tắc cửa hàng."],
    ["Xóa cả tiến trình làm gì?", "Đặt lại ván, kỷ lục và kết quả cục bộ liên quan, không xóa Premium hay tùy chọn. Không chọn thì tiến trình được giữ."],
    ["Gỡ ứng dụng xóa hết không?", "Có thể mất tiến trình cục bộ nhưng không yêu cầu xóa tài khoản máy chủ. Bảng xếp hạng không phải sao lưu đầy đủ."],
    ["Quản lý đồng ý quảng cáo ở đâu?","Trong Cài đặt, mở Quyền riêng tư quảng cáo khi có để xem lại hoặc thay đổi lựa chọn, bao gồm quyền từ chối áp dụng tại Hoa Kỳ. Khả năng hiển thị phụ thuộc vào phiên bản và Google UMP. Trên iOS, hãy quản lý cả quyền theo dõi trong cài đặt điện thoại. Phiên bản cũ có thể cần cập nhật; bạn vẫn có thể liên hệ hỗ trợ."],
    ["Sao không thấy nhắc nhở?", "Kiểm tra nhắc nhở trong ứng dụng và quyền thông báo trên điện thoại."],
    ["Xin hoàn tiền thế nào?", "Liên hệ Apple hoặc Google theo cửa hàng mua. Điều khoản có liên kết thủ tục; bạn cũng có thể hỏi hỗ trợ."]
  ],
  privacy: {
    sections: [
      { id: "0", title: "Tóm tắt", content: "Cập nhật ngày 21 tháng 11 năm 2026.\n\nBạn có thể chơi mà không cung cấp tên, email hay mật khẩu. Bảng xếp hạng dùng tài khoản ẩn danh; mã định danh kỹ thuật không khiến dữ liệu liên quan được ẩn danh hóa. Ván chơi và cài đặt ở trên thiết bị; biệt danh và kỷ lục xếp hạng được lưu trên máy chủ và hiển thị trong bảng xếp hạng. Bên thứ ba hỗ trợ bảo mật, quảng cáo và mua hàng. Bạn có thể yêu cầu xóa tài khoản xếp hạng, kèm hoặc không kèm xóa tiến trình cục bộ." },
      {
        id: "1",
        title: "1. Bên kiểm soát dữ liệu",
        content: `Ứng dụng được phát hành bởi:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nLiên hệ cho mọi câu hỏi về dữ liệu của bạn: ${EMAIL}\n\nĐối với dữ liệu quảng cáo do Google xử lý, Google hoạt động với tư cách bên kiểm soát độc lập, theo các quy tắc riêng của mình (Mục 5).`,
      },
      { id: "2", title: "2. Tiến trình và tùy chọn cục bộ", content: "Thiết bị lưu ván đang chơi, kỷ lục cục bộ, kết quả thử thách hằng ngày, thống kê cúp, tùy chọn và ngày mời đánh giá. Kỷ lục dành cho bảng xếp hạng được gửi riêng.\n\nChúng tôi không cung cấp bản sao máy chủ để khôi phục toàn bộ tiến trình trên thiết bị khác. Xóa dữ liệu hoặc gỡ ứng dụng có thể làm mất tiến trình. Sao lưu của hệ điều hành tùy thuộc cài đặt thiết bị." },
      { id: "2a", title: "2a. Tài khoản và bảng xếp hạng", content: "Một tài khoản kỹ thuật ẩn danh được tạo khi truy cập bảng xếp hạng lần đầu. Dịch vụ Supabase tự lưu trữ của chúng tôi giữ danh tính đăng nhập, phiên, biệt danh được cấp, kỷ lục công bố, ngày liên quan và trạng thái tài khoản. Thông tin xác thực phiên cũng được lưu trên thiết bị.\n\nBiệt danh, điểm và thứ hạng hiển thị công khai trong bảng; thông tin đăng nhập và biên nhận xóa không công khai. Kỷ lục đủ điều kiện từ ván kết thúc hoặc bỏ dở có thể được gửi lại sau lỗi mạng. Bảng xếp hạng không phải bản sao lưu ván chơi." },
      { id: "2b", title: "2b. Bảo mật và ngăn lạm dụng", content: "Chúng tôi xử lý dữ liệu kỹ thuật yêu cầu, gồm IP ở đầu vào dịch vụ, giá trị băm cài đặt/mạng, ngày và bộ đếm, để bảo vệ bảng xếp hạng, hạn chế đăng ký lặp và xử lý xóa, hạn chế. Giá trị băm vẫn là dữ liệu được định danh giả.\n\nFirebase App Check và cơ chế chứng thực Apple/Google xác minh yêu cầu bằng dữ liệu kỹ thuật và mã chứng thực. Firebase không còn cung cấp xác thực hay lưu trữ bảng xếp hạng. Chi tiết: https://firebase.google.com/support/privacy" },
      {
        id: "3",
        title: "3. Lời nhắc (thông báo)",
        content:
          "Nếu bạn bật lời nhắc trong cài đặt, Ứng dụng sẽ xin quyền hiển thị thông báo. Lời nhắc được lên lịch cục bộ trên thiết bị của bạn: không có mã thông báo nào được tạo hoặc gửi đến máy chủ. Bạn có thể tắt chúng bất cứ lúc nào trong cài đặt của Ứng dụng hoặc của thiết bị. Lời nhắc không chứa quảng cáo.",
      },
      { id: "4", title: "4. Hỗ trợ", content: `Khi liên hệ ${EMAIL}, chúng tôi nhận địa chỉ email, nội dung và tệp bạn chọn gửi. Tin nhắn chuẩn bị sẵn có thể gồm phiên bản ứng dụng và hệ điều hành; bạn có thể xóa chúng.\n\nDữ liệu dùng để trả lời, xác minh yêu cầu tài khoản và giải quyết vấn đề. Chúng được giữ trong thời gian xử lý, sau đó chỉ khi cần theo dõi, bảo vệ quyền hoặc thực hiện nghĩa vụ pháp lý. Không gửi mật khẩu, mã đăng nhập hay thông tin ngân hàng.` },
      { id: "5", title: "5. Quảng cáo và lựa chọn quyền riêng tư", content: `Google AdMob cung cấp biểu ngữ và video thưởng tùy chọn. Tùy hệ thống và quyền, SDK xử lý IP, mã quảng cáo hoặc ứng dụng, tương tác và chẩn đoán để hiển thị, đo lường quảng cáo và ngăn gian lận. Premium bỏ cả video thưởng.\n\nĐồng ý xem video khác với đồng ý xử lý dữ liệu quảng cáo. Các phiên bản tích hợp Google UMP hiển thị biểu mẫu khi dịch vụ yêu cầu, trước khi yêu cầu quảng cáo; biểu mẫu được cấu hình để hiển thị trên toàn thế giới. Bạn có thể chấp nhận, từ chối hoặc quản lý các lựa chọn được cung cấp. Trong Cài đặt, Quyền riêng tư quảng cáo mở lại các tùy chọn có sẵn, bao gồm quyền từ chối bán/chia sẻ dữ liệu hoặc quảng cáo nhắm mục tiêu áp dụng tại Hoa Kỳ. Từ chối theo dõi không ngăn bạn chơi. Google chọn ngôn ngữ theo điện thoại và các bản dịch được hỗ trợ; tiếng Anh có thể được dùng thay thế. Phiên bản cũ có thể chưa có mục này: hãy cập nhật ứng dụng hoặc liên hệ hỗ trợ để thực hiện quyền của bạn. Liên hệ hỗ trợ không thay thế sự đồng ý cần có trước khi xử lý.\n\nAndroid cho phép đặt lại hoặc xóa mã quảng cáo. Trên iOS, truy cập IDFA và theo dõi thuộc ATT cần quyền Apple tương ứng. Những cài đặt này không tự xóa dữ liệu nhà cung cấp đã giữ. Các quyền theo luật địa phương, gồm từ chối một số quảng cáo nhắm mục tiêu, vẫn áp dụng.\n\nGoogle: ${GOOGLE_PRIVACY}\nDịch vụ đối tác: ${GOOGLE_PARTNERS}` },
      { id: "6", title: "6. Mua Premium và khôi phục", content: "Apple hoặc Google xử lý thanh toán và giữ thông tin hóa đơn theo quy tắc riêng. Chúng tôi không nhận số thẻ.\n\nRevenueCat xác minh và khôi phục giao dịch mua một lần không quảng cáo. Dịch vụ xử lý mã định danh giả, giao dịch/biên lai, sản phẩm, cửa hàng và quyền Premium. Ứng dụng cũng giữ trạng thái cần cho truy cập. Xóa tài khoản xếp hạng không xóa giao dịch mua; dữ liệu phục hồi và nghĩa vụ liên quan được xử lý riêng.\n\nChi tiết: https://www.revenuecat.com/privacy" },
      {
        id: "7",
        title: "7. Xếp hạng và đánh giá",
        content:
          "Khi Ứng dụng mời bạn đánh giá, nó sử dụng cửa sổ chính thức của Apple hoặc Google. Xếp hạng và nhận xét của bạn được cửa hàng tương ứng xử lý theo quy tắc riêng; Ứng dụng không có quyền truy cập.",
      },
      { id: "8", title: "8. Mục đích và cơ sở pháp lý", content: "Trò chơi, tài khoản xếp hạng được yêu cầu và quản lý/khôi phục Premium dựa trên cung cấp dịch vụ hoặc hợp đồng. Bảo mật, giới hạn chống lạm dụng và hỗ trợ dựa trên lợi ích chính đáng bảo vệ dịch vụ, người dùng, đồng thời tôn trọng quyền của bạn. Nhắc nhở là tùy chọn và cần quyền của thiết bị.\n\nXử lý quảng cáo và truy cập mã định danh dựa trên đồng ý khi bắt buộc. Một số lưu giữ phục vụ nghĩa vụ pháp lý hoặc xác lập, thực hiện, bảo vệ quyền. Các cơ sở này không cho phép tái sử dụng tùy ý." },
      { id: "9", title: "9. Nhà cung cấp và chuyển dữ liệu", content: `Bên nhận cần thiết:\n• Contabo: máy chủ Supabase và bảng xếp hạng;\n• Cloudflare: định tuyến và bảo vệ yêu cầu;\n• Backblaze: bản sao và nhật ký quyết định được mã hóa;\n• Google/Firebase và Apple: chứng thực, dịch vụ hệ thống;\n• Google AdMob: quảng cáo;\n• RevenueCat và Apple/Google: mua hàng;\n• GitHub Pages: các tài liệu công khai này; cơ quan có thẩm quyền khi luật yêu cầu.\n\nSupabase được tự lưu trữ, không có nghĩa dữ liệu người chơi ở Supabase Cloud. Nhà cung cấp quốc tế có thể xử lý ngoài EEA, gồm Hoa Kỳ. Bảo đảm chuyển dữ liệu tùy dịch vụ và hợp đồng; hỏi tại ${EMAIL}. Chúng tôi không bảo đảm mọi xử lý ở châu Âu, không bán dữ liệu bảng xếp hạng.\n\nChính sách: https://contabo.com/en/legal/privacy/ ; https://www.cloudflare.com/privacypolicy/ ; https://www.backblaze.com/company/privacy ; https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement` },
      {
        id: "10",
        title: "10. Trẻ em",
        content: `Ứng dụng dành cho người từ 16 tuổi trở lên. Ứng dụng không hướng đến trẻ em và chúng tôi không cố ý thu thập dữ liệu về trẻ em.\n\nTại Pháp, người chưa thành niên dưới 15 tuổi không thể tự mình đồng ý với việc xử lý dữ liệu dựa trên sự đồng ý: cần có thêm sự chấp thuận của một người nắm quyền cha mẹ (Điều 45 Luật bảo vệ dữ liệu của Pháp, Loi Informatique et Libertés). Nếu bạn là cha mẹ và cho rằng con bạn đã đưa ra sự đồng ý, hãy viết cho chúng tôi tại ${EMAIL}: chúng tôi sẽ hướng dẫn bạn cách rút lại.`,
      },
      { id: "11", title: "11. Xóa tài khoản và quyền của bạn", content: `Mục tài khoản bảng xếp hạng trong Cài đặt cho phép yêu cầu và theo dõi xóa. Khi máy chủ chấp nhận, hồ sơ bị gỡ khỏi bảng, sau đó danh tính và dữ liệu đang hoạt động liên quan bị xóa. Yêu cầu ngoại tuyến phải được gửi trước; gỡ ứng dụng không xóa tài khoản máy chủ.\n\n“Xóa cả tiến trình của tôi” đặt lại ván, kỷ lục và kết quả cục bộ liên quan. Không chọn thì dữ liệu ở lại thiết bị. Premium và tùy chọn được giữ. Sau khi xóa xong, tự nguyện tham gia lại tạo danh tính và biệt danh mới, tùy giới hạn chống lạm dụng. Kỷ lục cục bộ giữ lại có thể đăng lại; tài khoản cũ không khôi phục, biệt danh có thể cấp lại cho người khác.\n\nKhông vào được ứng dụng, hãy gửi ${EMAIL} tên Match the Digits và biệt danh/mã xếp hạng bạn có, không gửi mã truy cập hay mật khẩu. Có thể cần xác minh phù hợp để không xóa tài khoản người khác.\n\nTùy trường hợp, bạn có quyền truy cập, sửa, xóa, hạn chế, phản đối, chuyển dữ liệu và rút đồng ý. Thường trả lời trong một tháng, có thể gia hạn theo luật. Bạn có thể khiếu nại CNIL tại ${CNIL_URL} hoặc cơ quan có thẩm quyền của nước mình.` },
      { id: "12", title: "12. An toàn dữ liệu", content: "Thông tin trao đổi được mã hóa khi truyền. Quyền quản trị bị giới hạn; bản sao và nhật ký quyết định được mã hóa. Điều này giảm rủi ro nhưng không bảo đảm an toàn tuyệt đối. Bảng xếp hạng công khai vẫn hiển thị; không gửi bí mật qua hỗ trợ." },
      { id: "12a", title: "12a. Thời gian lưu và sao lưu", content: `Dữ liệu cục bộ giữ đến khi bị xóa hoặc thay. Tài khoản và kỷ lục giữ đến khi xóa tài khoản. Bộ đếm tạm và hạn chế có thời hạn riêng; một số dấu vết cần cho chống lạm dụng và tranh chấp.\n\nChu kỳ sao lưu giữ 7 điểm hằng ngày, 4 hằng tuần và 2 hằng tháng. Không bảo đảm mọi bản sao bị xóa đúng một ngày. Nhật ký ngăn phục hồi lại tài khoản đã xóa.\n\nBiên nhận xóa và nhật ký hiện vẫn được giữ mà chưa tự động dọn. Chúng có thể chứa mã kỹ thuật, giá trị băm, ngày và trạng thái. Bạn có thể đề nghị xem xét lưu giữ hoặc xóa qua ${EMAIL}. Dữ liệu mua hàng theo riêng nhu cầu khôi phục và nghĩa vụ áp dụng.` },
      { id: "13", title: "13. Thay đổi", content: "Chính sách có trong cài đặt và trên website. Ngày cho biết phiên bản. Nội dung được cập nhật theo dịch vụ; nghĩa vụ thông báo và xin đồng ý mới khi cần vẫn áp dụng." },
      { id: "14", title: "14. Liên hệ", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Nhà phát hành",
        content: `Ứng dụng di động Match the Digits (\"Ứng dụng\") được phát hành bởi:\n\n${PUBLISHER}\n• Địa chỉ: ${ADDRESS}\n• Điện thoại: ${PHONE}\n• Email: ${EMAIL}\n• ${IDS}, ${REG}\n• Mã số VAT nội khối EU: ${VAT}, không áp dụng VAT, Điều 293 B Bộ luật Thuế chung của Pháp\n• Người chịu trách nhiệm xuất bản: Marc SAMSON\n• Đơn vị lưu trữ các trang chính sách quyền riêng tư và Điều khoản này: ${HOST}, ${HOST_SUPPORT}`,
      },
      {
        id: "2",
        title: "2. Mục đích và chấp nhận",
        content: `Các điều khoản này (\"Điều khoản\") điều chỉnh việc sử dụng Ứng dụng. Khi tải xuống hoặc sử dụng Ứng dụng, bạn chấp nhận chúng. Nếu không chấp nhận, đừng sử dụng Ứng dụng.\n\nỨng dụng dành cho người từ 16 tuổi trở lên.\n\nViệc sử dụng dữ liệu cá nhân của bạn được mô tả trong Chính sách quyền riêng tư, có tại ${privacyUrl(dir)} và trong cài đặt của Ứng dụng.`,
      },
      {
        id: "3",
        title: "3. Giấy phép",
        content: `Nhà phát hành cấp cho bạn giấy phép cá nhân, không độc quyền, không thể chuyển nhượng và có thể thu hồi để cài đặt và sử dụng Ứng dụng trên các thiết bị bạn sở hữu hoặc kiểm soát, cho mục đích riêng tư và phi thương mại.\n\n• Trên iOS, Ứng dụng được cấp phép cho bạn theo Thỏa thuận cấp phép người dùng cuối tiêu chuẩn của Apple (Licensed Application End User License Agreement): ${APPLE_EULA}\nĐiều khoản này bổ sung cho thỏa thuận đó; nếu có mâu thuẫn, thỏa thuận của Apple được ưu tiên đối với việc sử dụng Ứng dụng trên iOS.\n• Trên Android, việc sử dụng Ứng dụng cũng tuân theo Điều khoản dịch vụ của Google Play.\n\nỨng dụng được cấp phép, không phải được bán.`,
      },
      {
        id: "4",
        title: "4. Sử dụng Ứng dụng",
        content:
          "Bạn cam kết không:\n\n• sao chép, sửa đổi, dịch ngược, tháo rời hoặc tìm cách trích xuất mã nguồn của Ứng dụng, trừ khi luật cho phép rõ ràng;\n• lách hoặc làm gián đoạn các cơ chế kỹ thuật của Ứng dụng, bao gồm việc hiển thị quảng cáo và giao dịch mua trong ứng dụng;\n• tạo lượt hiển thị hoặc lượt nhấp quảng cáo một cách giả tạo;\n• sử dụng Ứng dụng theo cách trái pháp luật hoặc xâm phạm quyền của bên thứ ba.",
      },
      { id: "5", title: "5. Trò chơi, tiến trình và bảng xếp hạng", content: "Không cần tài khoản email/mật khẩu để chơi. Bảng xếp hạng dùng danh tính kỹ thuật ẩn danh và biệt danh được cấp. Hồ sơ ảo được đánh dấu không phải người chơi thật. Không có giải tiền mặt.\n\nVán, thử thách, cúp và cài đặt chủ yếu ở máy. Máy chủ giữ kỷ lục công bố, không sao lưu toàn bộ tiến trình. Kết thúc hoặc bỏ ván để chơi mới có thể gửi kỷ lục đủ điều kiện và thử lại khi lỗi mạng.\n\nMỗi bảng tối đa năm lần thêm, hai lần đầu miễn phí, và bốn gợi ý. Không Premium, ba lần thêm còn lại và gợi ý đề nghị quảng cáo thưởng. Premium có cùng giới hạn.\n\nGian lận, điểm giả hoặc đăng ký lặp lạm dụng có thể bị hạn chế hoặc loại khỏi bảng. Bạn có thể phản đối qua hỗ trợ." },
      { id: "6", title: "6. Quảng cáo và phần thưởng", content: "Có thể xuất hiện biểu ngữ khi chơi. Trước gợi ý hoặc lượt nạp tương ứng, video thưởng được đề nghị với sự chấp nhận của bạn. Khi thưởng được xác nhận, thao tác được cấp trong số lượt còn lại.\n\nNếu sau yêu cầu quảng cáo không khả dụng do kỹ thuật, ứng dụng có thể cấp thao tác không cần video với thông báo nhỏ. Từ chối hoặc đóng trước khi nhận thưởng không được cấp. Premium không tăng thêm lượt quá giới hạn đã hết.\n\nQuảng cáo và đích đến do bên thứ ba cung cấp. Chính sách giải thích xử lý dữ liệu; chấp nhận video không phải đồng ý về quyền riêng tư." },
      { id: "7", title: "7. Giao dịch mua \"Xóa quảng cáo\"", subsections: [{ subtitle: "Bạn nhận được gì", content: "Premium mua một lần, không tự gia hạn. Bỏ biểu ngữ và quảng cáo thưởng; gợi ý và thêm được dùng trực tiếp với cùng giới hạn bốn gợi ý, năm lần thêm mỗi bảng. Lưới có thể dùng khoảng trống của biểu ngữ." },
{ subtitle: "Giá và thanh toán", content: "Khi khả dụng, đề nghị hiển thị giá địa phương do cửa hàng cung cấp. Kiểm tra giá và điều kiện trong xác nhận Apple/Google. Mua hủy, chờ hoặc thất bại không coi là đã sở hữu. RevenueCat xác minh Premium; chúng tôi không nhận dữ liệu thẻ." },
{ subtitle: "Khôi phục", content: "Dùng Khôi phục giao dịch mua trong Cài đặt với tài khoản và cửa hàng gốc. Có thể cần mạng. Mua Apple không tự chuyển sang Google Play hoặc ngược lại. Xóa bảng xếp hạng hay tiến trình không hủy mua." },
{
            subtitle: "Rút lại và hoàn tiền",
            content: `Giao dịch mua liên quan đến nội dung số được cung cấp ngay sau khi thanh toán. Quyền rút lại và yêu cầu hoàn tiền được thực hiện theo các điều kiện của luật áp dụng và quy tắc của cửa hàng tương ứng:\n\n• App Store: yêu cầu với Apple tại ${APPLE_REFUND}\n• Google Play: yêu cầu với Google theo quy trình tại ${GOOGLE_REFUND}\n\nBạn cũng có thể viết cho chúng tôi tại ${EMAIL}.`,
          }] },
      {
        id: "8",
        title: "8. Lời nhắc",
        content:
          "Nếu bạn bật lời nhắc, Ứng dụng có thể gửi cho bạn lời nhắc cục bộ. Bạn có thể tắt chúng bất cứ lúc nào trong cài đặt của Ứng dụng hoặc của thiết bị. Lời nhắc không chứa quảng cáo.",
      },
      {
        id: "9",
        title: "9. Sở hữu trí tuệ",
        content: `Ứng dụng, tên, hình ảnh, văn bản, âm thanh, mã nguồn và cách trình bày của Ứng dụng được bảo hộ bởi luật sở hữu trí tuệ và thuộc về nhà phát hành hoặc bên cấp phép. Một số thành phần của bên thứ ba được sử dụng theo giấy phép riêng:\n\n${LICENSES}\n\nNghiêm cấm mọi hành vi sao chép hoặc tái sử dụng khi chưa được phép.`,
      },
      { id: "10", title: "10. Khả dụng và cập nhật", content: "Bảng xếp hạng, mua hàng và một số kiểm tra cần mạng và nhà cung cấp. Lỗi, bảo trì, hạn chế an ninh hay thiếu quảng cáo có thể ảnh hưởng. Chơi cục bộ có thể tiếp tục tùy trạng thái ván.\n\nChúng tôi có thể sửa hoặc phát triển ứng dụng. Quyền bắt buộc của người tiêu dùng và nghĩa vụ dịch vụ số vẫn áp dụng. Mua không quảng cáo không bảo đảm dịch vụ trực tuyến tồn tại vĩnh viễn." },
      {
        id: "11",
        title: "11. Bảo đảm và trách nhiệm",
        content:
          "Ứng dụng được cung cấp \"nguyên trạng\". Không điều gì trong Điều khoản này hạn chế các quyền mà luật trao cho bạn với tư cách người tiêu dùng, đặc biệt là bảo đảm pháp lý về tính phù hợp của nội dung và dịch vụ số.\n\nTrong phạm vi luật cho phép, nhà phát hành không chịu trách nhiệm về:\n\n• việc mất tiến trình được lưu trên thiết bị của bạn (Mục 5);\n• thiệt hại gián tiếp;\n• nội dung quảng cáo do bên thứ ba cung cấp;\n• tình trạng không khả dụng do thiết bị, hệ điều hành, kết nối của bạn hoặc dịch vụ của Apple và Google.\n\nCác giới hạn này không áp dụng trong trường hợp lỗi nặng hoặc cố ý, đối với thương tích cá nhân, hoặc khi luật cấm.",
      },
      { id: "12", title: "12. Xóa và ngừng sử dụng", content: `Bạn có thể dừng bất cứ lúc nào. Để xóa tài khoản máy chủ, dùng mục bảng xếp hạng trong Cài đặt hoặc ${EMAIL}; gỡ ứng dụng chưa đủ. Chính sách mô tả xử lý và sao lưu.\n\nXóa tiến trình cục bộ là tùy chọn. Tài khoản đã xóa không khôi phục; được phép quay lại sẽ tạo danh tính và biệt danh mới. Kỷ lục cục bộ giữ lại có thể dùng lại. Premium gắn với giao dịch mua, độc lập bảng xếp hạng.\n\nLạm dụng có thể hạn chế bảng xếp hạng nhưng không tước quyền luật định. Sở hữu trí tuệ, trách nhiệm và giải quyết tranh chấp tiếp tục áp dụng.` },
      { id: "13", title: "13. Sửa đổi điều khoản", content: "Bản hiện hành kèm ngày có trong ứng dụng và website. Thay đổi dịch vụ hoặc luật có thể cần sửa đổi. Nghĩa vụ thông tin và quyền người tiêu dùng đã có vẫn được giữ." },
      { id: "14", title: "14. Luật, hòa giải và tranh chấp", content: `Luật Pháp áp dụng mà không tước bảo vệ bắt buộc của người tiêu dùng tại nước cư trú.\n\nGửi khiếu nại đến ${EMAIL}. Sau khiếu nại bằng văn bản, bạn giữ quyền hòa giải tiêu dùng miễn phí theo điều kiện luật định. Nhà phát hành chưa hoàn tất tham gia cơ chế hòa giải; liên hệ của hòa giải viên sẽ được công bố sau khi tham gia. Điều khoản này chưa chỉ định hòa giải viên.\n\nNếu không thỏa thuận được, có thể yêu cầu tòa có thẩm quyền, giữ các biện pháp bảo vệ gắn với nơi cư trú của người tiêu dùng.` },
      { id: "15", title: "15. Liên hệ", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` }
    ],
  },
};

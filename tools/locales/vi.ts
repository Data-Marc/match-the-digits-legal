import { ADDRESS, APPLE_EULA, APPLE_REFUND, CNIL, CNIL_URL, EMAIL, GOOGLE_PARTNERS, GOOGLE_PRIVACY, GOOGLE_REFUND, HOST, HOST_PHONE, IDS, LICENSES, MEDIATOR, PHONE, REG, VAT, privacyUrl, type Locale } from "../common.ts";

const dir = "vi/";
const PUBLISHER = "Marc SAMSON, entrepreneur individuel (EI, doanh nghiệp tư nhân theo luật Pháp), với tên thương mại Primisia";

export const vi: Locale = {
  code: "vi",
  dir,
  name: "Tiếng Việt",
  updated: "21 tháng 10 năm 2026",
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
    privacyDesc: "Chính sách quyền riêng tư của trò chơi Match the Digits: không cần tài khoản, dữ liệu trò chơi lưu trên thiết bị của bạn, quảng cáo Google AdMob có sự đồng ý.",
    termsDesc: "Điều khoản sử dụng của trò chơi Match the Digits: giấy phép, quảng cáo, giao dịch mua một lần Xóa quảng cáo, trách nhiệm và luật áp dụng.",
    supportDesc: "Hỗ trợ, liên hệ và câu hỏi thường gặp về trò chơi giải đố Match the Digits.",
    supportIntro: "Bạn cần trợ giúp? Hãy viết cho chúng tôi và ghi rõ mẫu thiết bị nếu có thể.",
    emailSupport: "Hỗ trợ qua email",
    faqTitle: "Câu hỏi thường gặp",
    language: "Ngôn ngữ",
    translationNote: "Bản dịch này chỉ nhằm mục đích tham khảo. Trong trường hợp có khác biệt, bản tiếng Pháp được ưu tiên áp dụng.",
  },
  faq: [
    ["Tôi có cần tạo tài khoản không?", "Không. Match the Digits không yêu cầu tài khoản, đăng ký hay đăng nhập. Bạn có thể chơi ngay sau khi cài đặt."],
    ["Tôi đã mua \"Xóa quảng cáo\" nhưng vẫn thấy quảng cáo", "Mở phần cài đặt của ứng dụng và nhấn <strong>Khôi phục giao dịch mua</strong>. Hãy chắc chắn rằng bạn đăng nhập bằng cùng tài khoản App Store hoặc Google Play đã dùng để mua."],
    ["\"Xóa quảng cáo\" có phải là gói đăng ký không?", "Không. Đây là giao dịch mua một lần: chỉ tính phí một lần và không bao giờ gia hạn. Giao dịch này xóa mọi quảng cáo, kể cả quảng cáo có thưởng tùy chọn để nhận gợi ý. Nó không mang lại lợi thế nào trong trò chơi: mỗi người chơi có 4 gợi ý mỗi ván."],
    ["Gợi ý hoạt động thế nào?", "Mỗi ván cho bạn 4 gợi ý. Nếu chưa mua \"Xóa quảng cáo\", bạn có thể chọn xem một quảng cáo ngắn để hiện một gợi ý. Việc xem là tùy chọn: bạn luôn có thể tiếp tục chơi mà không cần xem."],
    ["Làm sao để thay đổi lựa chọn quảng cáo?", "Mở phần cài đặt của ứng dụng để xem hoặc thay đổi sự đồng ý bạn đã đưa ra cho quảng cáo. Trên Android, bạn cũng có thể đặt lại hoặc xóa mã nhận dạng quảng cáo trong cài đặt thiết bị."],
    ["Lời nhắc của tôi không hiện", "Kiểm tra xem thông báo của Match the Digits đã được cho phép trong cài đặt thiết bị chưa, và lời nhắc đã được bật trong cài đặt của ứng dụng chưa."],
    ["Tôi có bị mất tiến trình không?", "Ván chơi, điểm số, kết quả hằng ngày và cài đặt của bạn chỉ được lưu trên thiết bị. Gỡ cài đặt ứng dụng, xóa dữ liệu của ứng dụng hoặc đổi thiết bị sẽ xóa vĩnh viễn chúng: chúng tôi không giữ bản sao nào và không thể khôi phục."],
    ["Làm sao để được hoàn tiền?", `Giao dịch mua do Apple hoặc Google xử lý. Hãy yêu cầu hoàn tiền với Apple tại <a href="${APPLE_REFUND}">reportaproblem.apple.com</a>, hoặc với Google theo <a href="${GOOGLE_REFUND}">quy trình này</a>. Bạn cũng có thể viết cho chúng tôi.`],
  ],
  privacy: {
    sections: [
      {
        id: "0",
        title: "Tóm tắt",
        content:
          "Ngày có hiệu lực: 21 tháng 10 năm 2026.\n\nChính sách này giải thích dữ liệu nào được xử lý khi bạn sử dụng ứng dụng di động Match the Digits (\"Ứng dụng\") trên iOS và Android, vì sao, bởi ai, trong bao lâu và cách thực hiện các quyền của bạn.\n\n• Ứng dụng không yêu cầu bạn tạo tài khoản và không hỏi tên, địa chỉ email hay ngày sinh của bạn để chơi.\n• Tiến trình và cài đặt của bạn chỉ được lưu trên thiết bị của bạn. Chúng tôi không nhận được chúng.\n• Ứng dụng hiển thị quảng cáo do Google (AdMob) cung cấp. Để làm việc này, Google xử lý một số dữ liệu từ thiết bị của bạn, được mô tả tại Mục 5. Tại Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thụy Sĩ, sự đồng ý của bạn được yêu cầu trước mọi quảng cáo được cá nhân hóa.\n• Chúng tôi chỉ nhận dữ liệu về bạn nếu bạn viết cho chúng tôi (hỗ trợ).",
      },
      {
        id: "1",
        title: "1. Bên kiểm soát dữ liệu",
        content: `Ứng dụng được phát hành bởi:\n\n${PUBLISHER}\n${ADDRESS}\n${IDS}\n\nLiên hệ cho mọi câu hỏi về dữ liệu của bạn: ${EMAIL}\n\nĐối với dữ liệu quảng cáo do Google xử lý, Google hoạt động với tư cách bên kiểm soát độc lập, theo các quy tắc riêng của mình (Mục 5).`,
      },
      {
        id: "2",
        title: "2. Dữ liệu chỉ lưu trên thiết bị của bạn",
        content:
          "Các dữ liệu sau được lưu trong bộ nhớ cục bộ của Ứng dụng, trên thiết bị của bạn. Chúng không được gửi cho chúng tôi và không được gửi đến bất kỳ máy chủ nào của nhà phát hành:\n\n• Ván đang chơi (bàn chơi, điểm số, số gợi ý và lượt thêm còn lại): để tiếp tục ván chơi\n• Điểm cao nhất: để hiển thị trên màn hình chính và trong mục cúp\n• Kết quả hằng ngày (bàn chơi đã hoàn thành, điểm, cặp số, thử thách hằng ngày): lịch, thống kê, cúp\n• Tùy chọn: ngôn ngữ, phản hồi xúc giác, hiệu ứng âm thanh, lời nhắc: để tôn trọng cài đặt của bạn\n• Ngày của các yêu cầu đánh giá đã hiển thị: để không đề nghị bạn đánh giá Ứng dụng quá thường xuyên\n\nDữ liệu này được giữ chừng nào Ứng dụng còn được cài đặt. Bạn có thể xóa chúng bất cứ lúc nào bằng cách xóa dữ liệu của Ứng dụng (Android) hoặc gỡ cài đặt Ứng dụng (iOS và Android). Sau đó không thể khôi phục: nhà phát hành không sao lưu.",
      },
      {
        id: "3",
        title: "3. Lời nhắc (thông báo)",
        content:
          "Nếu bạn bật lời nhắc trong cài đặt, Ứng dụng sẽ xin quyền hiển thị thông báo. Lời nhắc được lên lịch cục bộ trên thiết bị của bạn: không có mã thông báo nào được tạo hoặc gửi đến máy chủ. Bạn có thể tắt chúng bất cứ lúc nào trong cài đặt của Ứng dụng hoặc của thiết bị. Lời nhắc không chứa quảng cáo.",
      },
      {
        id: "4",
        title: "4. Hỗ trợ (khi bạn viết cho chúng tôi)",
        content: `Nút \"Liên hệ hỗ trợ\" mở ứng dụng email của bạn với một email soạn sẵn gửi đến ${EMAIL}. Nếu bạn gửi, chúng tôi nhận được:\n\n• địa chỉ email và nội dung tin nhắn của bạn;\n• phiên bản Ứng dụng, hệ điều hành (iOS hoặc Android) và phiên bản của nó, được tự động thêm vào cuối tin nhắn để giúp chúng tôi giải quyết vấn đề. Bạn có thể xóa chúng trước khi gửi.\n\nDữ liệu này chỉ được dùng để trả lời bạn. Chúng được xóa ngay khi yêu cầu của bạn đã được xử lý.`,
      },
      {
        id: "5",
        title: "5. Quảng cáo (Google AdMob)",
        subsections: [
          {
            subtitle: "Dữ liệu do Google xử lý",
            content:
              "Ứng dụng hiển thị quảng cáo do Google AdMob cung cấp, thông qua Google Mobile Ads SDK được tích hợp trong Ứng dụng. Theo tài liệu Google công bố cho nhà phát triển, Google xử lý:\n\n• Địa chỉ IP, có thể dùng để ước tính vị trí gần đúng của thiết bị: quảng cáo, đo lường, phòng chống gian lận\n• Tương tác với Ứng dụng (lần mở, lần chạm, video đã xem): quảng cáo, đo lường, phòng chống gian lận\n• Dữ liệu chẩn đoán và hiệu suất (thời gian khởi động, tỷ lệ treo, mức tiêu thụ năng lượng); trên iOS, nhật ký sự cố không liên kết với người dùng: chẩn đoán, cải thiện, quảng cáo, đo lường\n• Mã nhận dạng thiết bị: mã nhận dạng quảng cáo (Android), App Set ID, các mã nhận dạng khác theo phạm vi ứng dụng hoặc nhà phát triển: quảng cáo và đo lường\n• Dữ liệu quảng cáo (quảng cáo đã xem): quảng cáo và đo lường\n\nGoogle cho biết dữ liệu này được mã hóa khi truyền (TLS). Nhà phát hành không có quyền truy cập dữ liệu cá nhân này: chỉ nhận số liệu thống kê tổng hợp (số lần hiển thị, doanh thu).",
          },
          {
            subtitle: "Quảng cáo hiển thị trong Ứng dụng",
            content:
              "• một biểu ngữ trên màn hình chơi;\n• một quảng cáo có thưởng tùy chọn: bạn có thể chọn xem video để nhận một gợi ý. Từ chối không ngăn bạn chơi.\n\nNếu bạn đã mua \"Xóa quảng cáo\" (Mục 6), sẽ không có quảng cáo nào được hiển thị.",
          },
          {
            subtitle: "Sự đồng ý của bạn (EEA, Vương quốc Anh, Thụy Sĩ)",
            content:
              "Ở lần mở đầu tiên, một cửa sổ xin đồng ý do công cụ quản lý sự đồng ý của Google điều hành cho phép bạn chấp nhận hoặc từ chối việc sử dụng dữ liệu cho mục đích quảng cáo, theo từng mục đích. Nếu bạn từ chối, Ứng dụng vẫn chơi được đầy đủ; khi đó có thể hiển thị quảng cáo không được cá nhân hóa hoặc bị giới hạn. Bạn có thể thay đổi lựa chọn bất cứ lúc nào trong cài đặt của Ứng dụng.",
          },
          {
            subtitle: "iOS: theo dõi",
            content:
              "Ứng dụng không xin quyền theo dõi hoạt động của bạn (App Tracking Transparency): mã nhận dạng quảng cáo của thiết bị (IDFA) không được sử dụng. Ứng dụng không bao giờ bắt buộc bạn chấp nhận theo dõi để chơi.",
          },
          {
            subtitle: "Android: mã nhận dạng quảng cáo",
            content: "Bạn có thể đặt lại hoặc xóa mã nhận dạng quảng cáo trong cài đặt thiết bị.",
          },
          {
            subtitle: "Hoa Kỳ",
            content:
              "Tùy theo Tiểu bang nơi bạn sinh sống, luật có thể cho bạn quyền từ chối việc \"bán\" hoặc \"chia sẻ\" dữ liệu của bạn cho quảng cáo nhắm mục tiêu. Bạn có thể thực hiện lựa chọn này trong cài đặt quyền riêng tư của Ứng dụng hoặc bằng cách viết cho chúng tôi.",
          },
          {
            subtitle: "Tìm hiểu thêm",
            content: `Chính sách quyền riêng tư của Google: ${GOOGLE_PRIVACY}\nCách Google sử dụng thông tin từ các trang web hoặc ứng dụng sử dụng dịch vụ của Google: ${GOOGLE_PARTNERS}`,
          },
        ],
      },
      {
        id: "6",
        title: "6. Giao dịch mua \"Xóa quảng cáo\"",
        content:
          "Giao dịch mua một lần để xóa quảng cáo được xử lý độc quyền bởi App Store (Apple) hoặc Google Play (Google). Chúng tôi không bao giờ nhận dữ liệu thanh toán của bạn (thẻ ngân hàng, tên, địa chỉ thanh toán). Ứng dụng chỉ nhận từ cửa hàng xác nhận rằng giao dịch đã được thực hiện, để xóa quảng cáo và cho phép khôi phục giao dịch. Việc xử lý thanh toán tuân theo chính sách quyền riêng tư của Apple hoặc Google.",
      },
      {
        id: "7",
        title: "7. Xếp hạng và đánh giá",
        content:
          "Khi Ứng dụng mời bạn đánh giá, nó sử dụng cửa sổ chính thức của Apple hoặc Google. Xếp hạng và nhận xét của bạn được cửa hàng tương ứng xử lý theo quy tắc riêng; Ứng dụng không có quyền truy cập.",
      },
      {
        id: "8",
        title: "8. Cơ sở pháp lý (GDPR)",
        content:
          "• Vận hành trò chơi và lưu cục bộ tiến trình, cài đặt của bạn: thực hiện dịch vụ bạn yêu cầu (hợp đồng)\n• Truy cập mã nhận dạng thiết bị và quảng cáo, được cá nhân hóa hay không, khi luật yêu cầu sự đồng ý: sự đồng ý, có thể rút lại bất cứ lúc nào (Mục 5)\n• Hiển thị lời nhắc: sự đồng ý (quyền thông báo), có thể rút lại bất cứ lúc nào\n• Trả lời yêu cầu hỗ trợ: lợi ích chính đáng trong việc trả lời bạn; hoặc biện pháp tiền hợp đồng / hợp đồng nếu yêu cầu liên quan đến giao dịch mua\n• Tuân thủ nghĩa vụ pháp lý (ví dụ, nghĩa vụ kế toán đối với giao dịch mua): nghĩa vụ pháp lý",
      },
      {
        id: "9",
        title: "9. Bên nhận và chuyển dữ liệu ra ngoài Liên minh Châu Âu",
        content:
          "Nhà phát hành không bán và không cho thuê dữ liệu do Ứng dụng xử lý. Các bên nhận duy nhất là:\n\n• Google, cho quảng cáo (Mục 5);\n• Apple hoặc Google, cho giao dịch mua, đánh giá và thông báo hệ thống, tùy theo thiết bị của bạn;\n• cơ quan chức năng, chỉ khi luật yêu cầu.\n\nGoogle có thể xử lý dữ liệu bên ngoài Liên minh Châu Âu, đặc biệt là tại Hoa Kỳ, với các biện pháp bảo đảm được mô tả trong chính sách quyền riêng tư của Google.",
      },
      {
        id: "10",
        title: "10. Trẻ em",
        content: `Ứng dụng dành cho người từ 16 tuổi trở lên. Ứng dụng không hướng đến trẻ em và chúng tôi không cố ý thu thập dữ liệu về trẻ em.\n\nTại Pháp, người chưa thành niên dưới 15 tuổi không thể tự mình đồng ý với việc xử lý dữ liệu dựa trên sự đồng ý: cần có thêm sự chấp thuận của một người nắm quyền cha mẹ (Điều 45 Luật bảo vệ dữ liệu của Pháp, Loi Informatique et Libertés). Nếu bạn là cha mẹ và cho rằng con bạn đã đưa ra sự đồng ý, hãy viết cho chúng tôi tại ${EMAIL}: chúng tôi sẽ hướng dẫn bạn cách rút lại.`,
      },
      {
        id: "11",
        title: "11. Quyền của bạn",
        content: `Theo luật áp dụng (đặc biệt là GDPR), bạn có quyền truy cập, chỉnh sửa, xóa, hạn chế xử lý, phản đối và di chuyển dữ liệu, cũng như quyền rút lại sự đồng ý bất cứ lúc nào mà không ảnh hưởng đến việc xử lý đã thực hiện.\n\n• Dữ liệu trên thiết bị: bạn kiểm soát trực tiếp (Mục 2).\n• Sự đồng ý về quảng cáo: có thể thay đổi bất cứ lúc nào trong cài đặt của Ứng dụng (Mục 5).\n• Dữ liệu quảng cáo do Google nắm giữ: công cụ và đầu mối liên hệ được mô tả trong chính sách quyền riêng tư của Google.\n• Dữ liệu hỗ trợ: viết cho ${EMAIL}. Chúng tôi trả lời trong vòng một tháng, thời hạn có thể được gia hạn theo các điều kiện của GDPR.\n\nNếu bạn cho rằng quyền của mình không được tôn trọng, bạn có thể khiếu nại với ${CNIL}, trực tuyến tại ${CNIL_URL}, hoặc với cơ quan bảo vệ dữ liệu của quốc gia nơi bạn cư trú.`,
      },
      {
        id: "12",
        title: "12. Bảo mật",
        content:
          "Dữ liệu trò chơi ở lại trên thiết bị của bạn và được hưởng các biện pháp bảo vệ của thiết bị. Trao đổi với Google được mã hóa (TLS). Không có dữ liệu trò chơi nào được lưu trên máy chủ của nhà phát hành.",
      },
      {
        id: "13",
        title: "13. Thay đổi",
        content:
          "Chúng tôi có thể thay đổi chính sách này, đặc biệt khi Ứng dụng phát triển. Ngày cập nhật lần cuối được hiển thị ở đầu trang này. Trong trường hợp có thay đổi quan trọng, bạn sẽ được thông báo trong Ứng dụng trước khi thay đổi được áp dụng.",
      },
      { id: "14", title: "14. Liên hệ", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
  terms: {
    sections: [
      {
        id: "1",
        title: "1. Nhà phát hành",
        content: `Ứng dụng di động Match the Digits (\"Ứng dụng\") được phát hành bởi:\n\n${PUBLISHER}\n• Địa chỉ: ${ADDRESS}\n• Điện thoại: ${PHONE}\n• Email: ${EMAIL}\n• ${IDS}, ${REG}\n• Mã số VAT nội khối EU: ${VAT}, không áp dụng VAT, Điều 293 B Bộ luật Thuế chung của Pháp\n• Người chịu trách nhiệm xuất bản: Marc SAMSON\n• Đơn vị lưu trữ các trang chính sách quyền riêng tư và Điều khoản này: ${HOST}, ${HOST_PHONE}`,
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
      {
        id: "5",
        title: "5. Trò chơi và tiến trình của bạn",
        content:
          "Ứng dụng không yêu cầu tài khoản. Tiến trình của bạn (ván đang chơi, điểm số, kết quả hằng ngày, cúp) và cài đặt của bạn chỉ được lưu trên thiết bị.\n\nNhà phát hành không sao lưu chúng: chúng sẽ mất nếu bạn gỡ cài đặt Ứng dụng, xóa dữ liệu của Ứng dụng hoặc đổi thiết bị. Nhà phát hành không thể khôi phục.\n\nLuật chơi, số gợi ý và lượt thêm có sẵn, cũng như các bàn chơi được cung cấp có thể thay đổi giữa các phiên bản.",
      },
      {
        id: "6",
        title: "6. Quảng cáo",
        content:
          "Ứng dụng miễn phí và được tài trợ bằng quảng cáo do Google AdMob cung cấp:\n\n• một biểu ngữ trên màn hình chơi;\n• một quảng cáo có thưởng tùy chọn: bạn có thể chọn xem video để nhận một gợi ý. Phần thưởng được nêu rõ trước video và được trao sau khi xem xong. Nếu bạn từ chối, hoặc không có quảng cáo nào, bạn vẫn có thể tiếp tục chơi.\n\nQuảng cáo do Google lựa chọn. Nhà phát hành không kiểm soát nội dung và không chịu trách nhiệm về sản phẩm hoặc dịch vụ được giới thiệu. Các lựa chọn của bạn về việc sử dụng dữ liệu cho quảng cáo được mô tả trong Chính sách quyền riêng tư.",
      },
      {
        id: "7",
        title: "7. Giao dịch mua \"Xóa quảng cáo\"",
        subsections: [
          {
            subtitle: "Bạn nhận được gì",
            content:
              "Ứng dụng cung cấp một giao dịch mua một lần, vĩnh viễn (\"Xóa quảng cáo\"):\n\n• xóa mọi quảng cáo khỏi Ứng dụng, kể cả quảng cáo có thưởng: khi đó gợi ý được trao trực tiếp;\n• không mang lại lợi thế nào trong trò chơi: mỗi người chơi có 4 gợi ý mỗi ván, dù có mua hay không; số lượt thêm và luật chơi như nhau cho mọi người;\n• không phải gói đăng ký: chỉ tính phí một lần và không gia hạn.",
          },
          {
            subtitle: "Giá và thanh toán",
            content:
              "Giá được hiển thị trên App Store hoặc Google Play trước khi mua, đã bao gồm thuế áp dụng tại quốc gia của bạn. Việc thanh toán do Apple hoặc Google xử lý độc quyền theo điều khoản của họ. Nhà phát hành không bao giờ nhận dữ liệu thanh toán của bạn.",
          },
          {
            subtitle: "Khôi phục giao dịch mua",
            content:
              "Giao dịch mua được liên kết với tài khoản Apple hoặc Google đã dùng để mua. Bạn có thể khôi phục miễn phí trên thiết bị mới hoặc sau khi cài đặt lại, với cùng tài khoản, bằng nút \"Khôi phục giao dịch mua\" trong cài đặt.",
          },
          {
            subtitle: "Rút lại và hoàn tiền",
            content: `Giao dịch mua liên quan đến nội dung số được cung cấp ngay sau khi thanh toán. Quyền rút lại và yêu cầu hoàn tiền được thực hiện theo các điều kiện của luật áp dụng và quy tắc của cửa hàng tương ứng:\n\n• App Store: yêu cầu với Apple tại ${APPLE_REFUND}\n• Google Play: yêu cầu với Google theo quy trình tại ${GOOGLE_REFUND}\n\nBạn cũng có thể viết cho chúng tôi tại ${EMAIL}.`,
          },
        ],
      },
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
      {
        id: "10",
        title: "10. Tính khả dụng và cập nhật",
        content:
          "Nhà phát hành có thể thay đổi Ứng dụng, sửa lỗi, sửa đổi hoặc gỡ bỏ tính năng, hoặc ngừng phân phối. Một số bản cập nhật có thể cần thiết để tiếp tục sử dụng Ứng dụng. Nhà phát hành nỗ lực để Ứng dụng hoạt động tốt nhưng không bảo đảm Ứng dụng luôn sẵn sàng không gián đoạn, đặc biệt đối với việc hiển thị quảng cáo vốn phụ thuộc vào Google.",
      },
      {
        id: "11",
        title: "11. Bảo đảm và trách nhiệm",
        content:
          "Ứng dụng được cung cấp \"nguyên trạng\". Không điều gì trong Điều khoản này hạn chế các quyền mà luật trao cho bạn với tư cách người tiêu dùng, đặc biệt là bảo đảm pháp lý về tính phù hợp của nội dung và dịch vụ số.\n\nTrong phạm vi luật cho phép, nhà phát hành không chịu trách nhiệm về:\n\n• việc mất tiến trình được lưu trên thiết bị của bạn (Mục 5);\n• thiệt hại gián tiếp;\n• nội dung quảng cáo do bên thứ ba cung cấp;\n• tình trạng không khả dụng do thiết bị, hệ điều hành, kết nối của bạn hoặc dịch vụ của Apple và Google.\n\nCác giới hạn này không áp dụng trong trường hợp lỗi nặng hoặc cố ý, đối với thương tích cá nhân, hoặc khi luật cấm.",
      },
      {
        id: "12",
        title: "12. Chấm dứt sử dụng",
        content:
          "Bạn có thể ngừng sử dụng Ứng dụng bất cứ lúc nào bằng cách gỡ cài đặt. Nhà phát hành có thể chấm dứt giấy phép của bạn nếu bạn không tuân thủ Điều khoản này. Các Mục 9, 11 và 14 tiếp tục áp dụng sau khi giấy phép chấm dứt.",
      },
      {
        id: "13",
        title: "13. Thay đổi Điều khoản",
        content:
          "Nhà phát hành có thể thay đổi Điều khoản này, đặc biệt để theo kịp các thay đổi của Ứng dụng hoặc của luật. Ngày cập nhật lần cuối được hiển thị ở đầu trang này. Trong trường hợp có thay đổi quan trọng, bạn sẽ được thông báo trong Ứng dụng trước khi thay đổi có hiệu lực. Nếu không chấp nhận Điều khoản mới, bạn có thể ngừng sử dụng Ứng dụng.",
      },
      {
        id: "14",
        title: "14. Luật áp dụng, hòa giải và tranh chấp",
        content: `Điều khoản này chịu sự điều chỉnh của luật Pháp. Nếu bạn là người tiêu dùng cư trú tại quốc gia khác, bạn vẫn được hưởng sự bảo vệ của các quy định bắt buộc trong luật của quốc gia mình.\n\nKhi gặp khó khăn, trước tiên hãy viết cho ${EMAIL}: chúng tôi sẽ tìm giải pháp thiện chí.\n\nHòa giải tiêu dùng: nếu bạn là người tiêu dùng và khiếu nại bằng văn bản của bạn chưa được giải quyết, bạn có thể sử dụng miễn phí hòa giải viên tiêu dùng sau: ${MEDIATOR}.\n\nNếu không đạt được thỏa thuận, tranh chấp sẽ được đưa ra tòa án có thẩm quyền; nếu bạn là người tiêu dùng, bạn có thể khởi kiện tại tòa án nơi bạn cư trú.`,
      },
      { id: "15", title: "15. Liên hệ", content: `Marc SAMSON EI, Primisia\n${ADDRESS}\n${EMAIL}` },
    ],
  },
};

const Q1 = () => {

    /**함수 정의: processOrders(orderList) 함수를 만드세요.
    반복 및 객체 접근: 배열 내의 각 주문 객체를 순회하며 데이터에 접근해야 합니다.
    조건문 (필터링): status가 "배송중"인 주문만 골라내야 합니다.
    조건문 (VIP 산정): 배송중인 주문 중 total 금액이 100,000원 이상인 고객에게는 isVIP: true라는 새로운 속성을 객체에 추가하세요. (10만 원 미만은 false)
    결과 반환: 수정된 "배송중" 상태의 주문 객체들만 담긴 새로운 배열을 반환하세요. */

    const orders = [
        { id: 1, customer: "김철수", items: ["노트북", "마우스"], total: 1200000, status: "배송중" },
        { id: 2, customer: "이영희", items: ["키보드"], total: 50000, status: "완료" },
        { id: 3, customer: "박지성", items: ["모니터", "거치대"], total: 300000, status: "배송중" },
        { id: 4, customer: "최유리", items: ["USB Hub"], total: 20000, status: "배송중" },
    ];

    const delivery = [];

    for (let list of orders) {
        if (list.status === "배송중") {
            delivery.push(list)
        }
    }

    console.log(delivery)
}

const Q2 = () => {
    const rentals = [
        {
            userId: 1,
            userName: "Kim",
            isPremium: true,
            books: [
                { title: "JavaScript 입문", fee: 5000, days: 7 },
                { title: "React 완벽 가이드", fee: 7000, days: 5 }
            ]
        },
        {
            userId: 2,
            userName: "Lee",
            isPremium: false,
            books: [
                { title: "HTML/CSS 기초", fee: 3000, days: 10 }
            ]
        },
        {
            userId: 3,
            userName: "Park",
            isPremium: true,
            books: []
        }
    ];


    const calculateRentalSummary = () => {
        const RentalSummary = [];
        for (let v of rentals) {
            let totalPrice = 0;
            let orderCount = 0;
            if (v.books) {
                for (let t of v.books) {
                    let salePrice = t.fee * t.days;
                    if (v.isPremium) totalPrice += salePrice - salePrice * 0.2;
                    else totalPrice += salePrice;
                    orderCount++;
                }
            }
            RentalSummary.push({ name: v.userName, totalPrice: totalPrice, orderCount: orderCount })
        }
        return RentalSummary
    }
    return console.log(calculateRentalSummary())

}

const Q3 = () => {

    // {
    // average: 78,
    // maxScore: 92,
    // minScore: 59,
    // passCount: 3
    // }


    const students = [
        { name: "철수", score: 85 },
        { name: "영희", score: 92 },
        { name: "민수", score: 76 },
        { name: "지수", score: 59 }
    ];

    const result = () => {

        let average = 0;
        let maxScore = students[0].score;
        let minScore = students[0].score;
        let passCount = 0;

        for (let v of students) {

            average += v.score;
            if (v.score > maxScore) maxScore = v.score;
            if (v.score < minScore) minScore = v.score;
            if (v.score >= 60) passCount++;

        };

        average = average / students.length;

        return (
            {
                average: average,
                maxScore: maxScore,
                minScore: minScore,
                passCount: passCount,
            }
        );
    };

    return console.log(result())
}

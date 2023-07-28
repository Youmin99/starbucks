
/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 게시글 등록하기
 *     tags: [starbucks]
 *     parameters:
 *       - in: query
 *         name: number
 *         type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   number:
 *                     type: int
 *                     example: 1
 *                   writer:
 *                     type: string
 *                     example: 영희
 *                   title:
 *                     type: string
 *                     example: 좋은아침 입니다~
 *                   contents:
 *                     type: string
 *                     example: 오늘 하루도 파이팅 하세요!
 */
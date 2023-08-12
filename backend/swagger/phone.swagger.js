/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: get token
 *     tags: [tokens]
 *     parameters:
 *       - in: formData
 *         name: phone
 *         type: string
 *         description: A user's phone.
 *     responses:
 *       200:
 *         description: Verification completed!!!
 */

/**
 * @swagger
 * /tokens/phone:
 *   patch:
 *     summary: get verification of token
 *     tags: [tokens]
 *     parameters:
 *       - in: formData
 *         name: phone
 *         type: string
 *         description: A user's phone.
 *       - in: formData
 *         name: token
 *         type: string
 *         description: A user's token.
 *     responses:
 *       200:
 *         description: Verification completed!!!
 */

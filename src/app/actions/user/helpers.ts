import * as crypto from 'crypto';

export function encrypt(text: string) {
    const hashedPassword = crypto
        .createHash('sha256')
        .update(text)
        .digest('hex');
    return hashedPassword;
}

export function validateHash(text: string, hash: string) {
    const newText = crypto.createHash('sha256').update(text).digest('hex');

    return newText === hash;
}

from aiogram import Bot, Dispatcher

import asyncio

bot = Bot(token='7202673368:AAHXelWNXOCMT9bJw6z8nfOyP-T6Hpp5_as')
dp = Dispatcher(bot=bot)

async def main():
    from handlers import dp
    try:
        await dp.start_polling()
    finally:
        await bot.session.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        print('Bot stopped!')

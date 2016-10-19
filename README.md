# Project Name

> ArchBot

## Team

  - __Product Owner__: Jason Holtkamp (@holtkam2)
  - __Scrum Master__: Patrik Korzinski (@pkorzinski)
  - __Development Team Members__: Michael Daof (@MichaelDaof),
                                  Jim Yang (@sourjam)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
    a. [Installing Dependencies](#installing-dependencies)
    b. [Tasks](#tasks)
4. [Team](#team)
5. [Contributing](#contributing)

## Usage

> A simple front end interface to view your team's Slack messages. For use with hrr-18-doge-bot. Will persist data much longer than Slack's free service. Also provides basic search of messages.
> To use the bot, a user will need to navigate to https://api.slack.com/bot-users and register a new bot user for their Slack team.
> The bot must be deployed on Heroku to function. For a guide on deploying Slack bots to Heroku, refer to https://blog.heroku.com/how-to-deploy-your-slack-bots-to-heroku.

## Requirements

- Node 5.7.1
- express 4.5.1
- body-parser 1.15.2
- method-override 2.0.2
- bower 1.7.9
- q 1.4.1
- path 0.12.7
- botkit 0.0.7
- dotenv 2.0.0
- express-http-proxy 0.6.0
- github-trending 1.3.1
- lodash 4.6.1
- slack 6.1.0


## Development


### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)

When making changes to the bot, the main file to pay attention to is bot.js. Almost everything else can be safely ignored. Also note that both the bot server and the ui server must be running for the program to work.

Also, refer to Slack's Real Time Messaging API for documentation on slack.rtm methods: https://api.slack.com/rtm

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

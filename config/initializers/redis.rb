# frozen_string_literal: true
redis = Redis.new(host: 'localhost', port: 6379, db: 1, password: 'online_game')
$redis_users_statuses = Redis::Namespace.new(:status, redis: redis)

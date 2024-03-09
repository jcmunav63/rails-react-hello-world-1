module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @message = Message.order('RANDOM()').first
        render json: @message, status: :ok, each_serializer: MessageSerializer
      end
    end
  end
end

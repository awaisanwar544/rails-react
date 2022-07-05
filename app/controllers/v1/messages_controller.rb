# frozen_string_literal: true

module V1
  class MessagesController < ApplicationController
    def index
      render json: { message: [
        {
          test: 'Hello there',
          guid: '001'
        }
      ] }
    end
  end
end

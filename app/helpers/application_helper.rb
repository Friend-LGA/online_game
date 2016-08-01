# frozen_string_literal: true
module ApplicationHelper
  def flash_class(level)
    case level
      when 'notice'
        'alert alert-info'
      when 'alert'
        'alert alert-error'
    end
  end
end
